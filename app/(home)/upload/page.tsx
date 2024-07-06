"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileUploader } from "./_component/FileUploader";
import { FileUploader2 } from "./_component/FileUploader2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Upload() {
  const [selectedOption, setSelectedOption] = useState<string>('x-ray'); // Default to 'x-ray'

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-screen pt-6 md:pt-18 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {/* Left Section */}
        <div className="bg-secondary rounded-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 md:mb-8 text-zinc-800 pl-2">Choose Detection Method</h2>
          <div className="flex flex-col gap-6">
            <Button
              variant="secondary"
              className={`border ${selectedOption === 'x-ray' ? 'bg-gray-200' : ''}`}
              onClick={() => handleOptionChange('x-ray')}
            >
              X-RAY
            </Button>
            <Button
              variant="secondary"
              className={`border ${selectedOption === 'recommendation' ? 'bg-gray-200' : ''}`}
              onClick={() => handleOptionChange('recommendation')}
            >
              Recommendation Engine
            </Button>
          </div>
          <div className="mt-8">
            {selectedOption === 'x-ray' && <FileUploader />}
            {selectedOption === 'recommendation' && <FileUploader2 />}
          </div>
          <div className="mt-8">
            <Link href="/detection">
              <Button variant="secondary" className="w-full md:w-auto border">
                DETECT
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-secondary rounded-md p-6 md:p-8 text-zinc-700">
          <h2 className="text-2xl font-bold mb-6 md:mb-8">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Support imgae and video both?</AccordionTrigger>
              <AccordionContent>
                Yes. Currently our frontend only support image , but model does support both.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can image be in jpg or png?</AccordionTrigger>
              <AccordionContent>
                It can be in both format
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos; animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
