from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from starlette.responses import JSONResponse
import os
from ultralytics import YOLO

# Initialize the FastAPI app
app = FastAPI()

# Add CORS middleware to allow access from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Load the YOLO model
model = YOLO('best.pt')

# Endpoint to upload and process an image file
@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    # Check if the 'uploads' directory exists, create it if not
    upload_dir = "uploads"
    if not os.path.exists(upload_dir):
        os.mkdir(upload_dir)

    # Check if the 'results' directory exists, create it if not
    results_dir = "results"
    if not os.path.exists(results_dir):
        os.mkdir(results_dir)

    # Save the uploaded file
    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Determine the new file path with incrementing index
    def get_incremented_filename(base_dir, base_name):
        i = 1
        while True:
            new_file_name = f"{base_name}_{i}"
            new_file_path = os.path.join(base_dir, new_file_name)
            if not os.path.exists(new_file_path):
                return new_file_path
            i += 1

    # Process the uploaded image using the YOLO model
    base_name = os.path.splitext(file.filename)[0]  # Filename without extension
    incremented_file_path = get_incremented_filename(results_dir, base_name)
   
    results = model.predict(file_path, save=True, imgsz=640, conf=0.5, stream_buffer=True, project=results_dir, name=os.path.basename(incremented_file_path))
    
    for result in results:
        x=(result.tojson())
    incremented_file_path+="/"
    incremented_file_path+=base_name
    return JSONResponse(status_code=200, content=x)

# Function to run the FastAPI app
def start_server():
    uvicorn.run(app, host="localhost", port=8000)

start_server()
