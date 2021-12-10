function setup() {
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EwioGDBku/model.json",model_loaded)
}
function model_loaded() {
    console.log("model has loaded")
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,handel)
}

function handel(error,result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);

        document.getElementById("object_span").innerHTML = result[0].label;
        document.getElementById("accuracy_span").innerHTML = result[0].confidence.tofixed(3);                   
    }
}