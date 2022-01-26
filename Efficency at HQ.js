function goodloops() {
    var TimeTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "Blastoff!!!";
                TimeTime = TimeTime - 1;
                play();
                Pic()
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
                Pic2()
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
function Pic(){
    var image = document.getElementById('Room');
    if (image.src.match("Room")) {
    image.src ='Launch.gif'
}
}
function play2() {
	var audio = document.getElementById("audio2");
    audio.play();
	}
    function Pic2(){
        var image = document.getElementById('Room');
        if (image.src.match("Room")) {
        image.src ='EagleLanding.jpg'
        }
    }
  //  function loop(){
       // for(i = 0; 1 < 3; i = i + 1){
          //  console.log(i)
           
         //   if ( i == 3) {break;}
     //   }