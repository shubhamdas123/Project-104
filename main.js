Webcam.set({
    height: 240,
    width: 250,
    image_format: "png",
    format_quality: 90
})

Webcam.attach("#webcam");

function takeSnapshot() {
    Webcam.snap(function(dataUri) {
        document.getElementById("result").innerHTML = '<img id="captImg" src="' + dataUri + '">'
    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qMZKi9Zjo/model.json', modelLoaded);

function modelLoaded() {
    console.log("model loaded");
    document.getElementById("identifyBtn").disabled = false;
}