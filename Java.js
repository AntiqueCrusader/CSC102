function functionName() {
    var image = document.getElementById('Moon');
    if (image.src.match("Moon")) {
        image.src = "Launch.gif";
    }
 }
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
