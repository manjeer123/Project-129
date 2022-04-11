song1="";
song2="";
scoreLeftWrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
  song_HarryPotter=song1.isPlaying()
image(video,0,0,600,500);

fill("#FF0000");
stroke("#FF4500");
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,20);

 song2.stop();
 if(song_HarryPotter==false){
   song1.play();
 }
else{
  document.getElementById("").innerHTML="Song played is Harry Potter";
}

}
}
function preload(){
    song1=loadSound("music.mp3");
   song2=loadSound("music2.mp3");


}

function modelLoaded(){
  console.log('PoseNet is initialized')
}
function gotPoses(results){
  if (results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x[9];
leftWristY=results[0].pose.leftWrist.y[9];
console.log('leftWristX='+leftWristX+'leftWristY'+leftWristY);

scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist="+scoreLeftWrist);

leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log('leftWristX='+leftWristX+'leftWristY'+leftWristY);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log('rightWristX='+rightWristX+'rightWristY'+rightWristY);


  }
  
}

