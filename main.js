noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
    ctx=canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

}
function draw(){
    background('#4166f5');
    fill('#F90093');
    stroke('#F90093');
    textSize(20)
    text(size, noseX,noseY)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY"+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;

    difference=floor(leftWristX-rightWristX);

    textSize()=difference
    console.log("leftWristX="+leftWristX+"rightWristX"+rightWristX+"difference="+difference);
}
}
function text(displaytext,xcoord,ycoord){
ctx.fillText(displaytext,xcoord,ycoord);
    
    
}






