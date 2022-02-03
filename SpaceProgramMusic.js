function MusicPlay(){
    var audio = document.getElementById("audio1");
    audio.play();
}
function MusicPlay2() {
    var audio = document.getElementById("audio2");
    audio.play();
}
function MusicPlay3() {
    var audio = document.getElementById("audio3");
    audio.play();
}

function MusicStop(){
    var audio = document.getElementById("audio1");
    audio.pause()
}
function MusicStop2(){
    var audio = document.getElementById("audio2");
    audio.pause()
}
function MusicStop3(){
    var audio = document.getElementById("audio3");
    audio.pause()
}

function ImgChange1() {
    var image = document.getElementById('PlayBtn');
    if (image.src.match("playbutton.jpg" || "DoorKickers.jpg")) {
        image.src = "PD2.jpg";
    }
    else{
        image.src = "PD2.jpg"
    }
}

function ImgChange2() {
    var image = document.getElementById('PlayBtn' || "PD2.jpg");
    if (image.src.match("playbutton.jpg" || "PD2.jpg")) {
        image.src = "DoorKickers.jpg";
    }
    else{
        image.src = "DoorKickers.jpg"
    }
}