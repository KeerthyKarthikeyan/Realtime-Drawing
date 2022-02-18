function preload(){

}
noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,120);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes);

    
}
function draw(){
background('antiquewhite');
document.getElementById("square_side").innerHTML="Width and Height of a square will be "+difference+" px";
fill('darkblue');
stroke('maroon');
square(noseX,noseY,difference);
}

function modeloaded(){
console.log('PoseNet is initialized');

}


function gotposes(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose x="+noseX);
    console.log("Nose y="+noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("LeftwristX="+leftwristX);
    console.log("RightwristX="+rightwristX);
    console.log("Difference="+difference);
}
}