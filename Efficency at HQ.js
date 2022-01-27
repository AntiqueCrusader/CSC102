function goodloops() {
    var TimeTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "Blastoff!!!";
                TimeTime = TimeTime - 1;
                play();
                changeImg()
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML ="Warning Less than half way to launch, time left is " + TimeTime; 
                    TimeTime = TimeTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "the time left is " + TimeTime;
                TimeTime = TimeTime - 1;
            }, 1000 * i);
        }
    }
}
function LandLoops() {
    var TimeTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "Landed on the Moon!!!";
                TimeTime = TimeTime - 1;
                play2();
                changeImg()
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML ="Warning Less than half way to Landing Site, the time left is " + TimeTime; 
                    TimeTime = TimeTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "the time left before Landing " + TimeTime;
                TimeTime = TimeTime - 1;
            }, 1000 * i);
        }
    }
}
function play() {
	var audio = document.getElementById("audio1");
    audio.play();
	}
function play2() {
	var audio = document.getElementById("audio2");
    audio.play();
	}
    function changeImg() {
        var image = document.getElementById('Room');
        if (image.src.match("ControlRoom.jpg")) {
            image.src = "Launch.gif";
        }
        else {
            image.src = "EagleLanding.jpg";
        }
    }
