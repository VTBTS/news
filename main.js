function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Loaded!');
}

function gotPoses(){
    if(result.length > 0){
        console.log(results);
    }
}
function draw(){
    background('#969A97');
}