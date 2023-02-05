diffrence=0
rightwristx=0
leftwristx=0
function preload(){

}

function setup(){
video = createCapture(VIDEO)
video.size(550, 500)
canvas = createCanvas(550, 550)
canvas.position(560,150)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}


function modelLoaded(){
console.log("poseNet is initialized")
}

function gotPoses(results){
if(results.length > 0 ){
console.log(results)
leftwristx=results[0].pose.leftWrist.x
rightwristx=results[0].pose.rigthWrist.x
diffrence=floor(leftwristx-rightwristx)
console.log("leftwristx="+leftwristx,"rightwristx="+rightwristx,"diffrence="+diffrence)
}
}

function draw(){
background('#FF0000')
textSize(diffrence)
document.getElementById("font_size").innerHTML="font size of the text will be ="+diffrence+"px"
fill("#FFD700")
text("Addy",50,400)
}