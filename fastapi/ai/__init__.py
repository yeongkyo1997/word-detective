from ultralytics import YOLO

model = YOLO('./best.pt')
results = model.predict(source='../dataset', save=True)
