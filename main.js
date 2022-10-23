
function setup(){
canvas= createCanvas(300,300)
canvas.position(615,300)
video=createCapture(VIDEO)
video.hide()
classifier=ml5.imageClassifier("MobileNet",ModelLoaded)
}
function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,gotResult)
  
}

function ModelLoaded(){
    console.log("Model has Loaded")
}
function gotResult(error,result){
if (error){
    console.log(error)
    
}
else{
    console.log(result)
    document.getElementById("object").innerHTML=result[0].label
    document.getElementById("accuracy").innerHTML=(result[0].confidence*100).toFixed(2)
}
}

