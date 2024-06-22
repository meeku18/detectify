from ultralytics import YOLO
import os

# Load the YOLO model
model = YOLO('best.pt')

#
# results = model('./uploads/boatWatchVideo.mp4' ,stream=True)

# for result in results:
#   result.save(filename="hey.mp4")
save_dir = "results"
#model.predict("./uploads/AsianShoes.png", save=True, imgsz=620, conf=0.5,stream_buffer=True,show=True)   
        
results = model.predict("./uploads/boatWatchVideo.mp4", save=True, imgsz=640, conf=0.5, stream_buffer=True, show=True, project=save_dir)

print(results.tojson())
for result in results:
    result.show()