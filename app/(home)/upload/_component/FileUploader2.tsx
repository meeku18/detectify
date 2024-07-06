"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useLinkStore2 } from '@/store/store';

export function FileUploader2() {
  const [fileName, setFileName] = useState<string>('No file chosen');
  const [imagePreview, setImagePreview] = useState<string>('');
  const addName = useLinkStore2((state) => state.addName);

  const handleFileChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = event.currentTarget.file as HTMLInputElement;
    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      setFileName('No file chosen');
      return;
    }
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8001/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = JSON.parse(response.data);
      console.log(responseData);
      if (Array.isArray(responseData) && responseData.length > 0 && responseData[0].name) {
        const productName = responseData[0].name;
        console.log(productName); // Should print the product name
        setFileName(file.name);
        addName(productName, imagePreview);
        setImagePreview('');
      } else {
        console.error("The response data is not in the expected format or is missing 'name' property");
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setFileName('No file chosen');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFileName(file ? file.name : 'No file chosen');

    // Read and display image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  return (
    <div className="p-5 border rounded-md">
      <h1 className="font-bold mb-4 text-xl text-zinc-800">Recommendation Engine</h1>
      <h2 className="mb-4 text-black">Select an image/video to upload</h2>
      <form onSubmit={handleFileChange} encType="multipart/form-data">
        <div className="flex items-center space-x-4 mb-4">
          <label
            htmlFor="file"
            className="px-4 py-2 bg-zinc-700 text-white rounded cursor-pointer hover:bg-zinc-800"
          >
            Choose a file
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={handleInputChange}
          />
          <span id="file-name">{fileName}</span>
        </div>
        {imagePreview && (
          <div className="mb-4">
            <img src={imagePreview} alt="Selected File Preview" className="max-w-full h-auto" />
          </div>
        )}
        <input
          type="submit"
          value="Upload"
          className="px-4 py-2 bg-zinc-700 text-white rounded cursor-pointer hover:bg-zinc-800"
        />
      </form>
    </div>
  );
}
