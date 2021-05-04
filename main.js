function preload() {
    mustache = loadImage("https://i.postimg.cc/rFbfwVC1/mustache.png");
}

var nosex = 0;
var nosey = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 25;
        nosey = results[0].pose.nose.y + 0;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, nosex, nosey, 50, 50);
}

function take_snapshot() {
    save('myFiltertImage.png');
}