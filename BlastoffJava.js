var timeout, interval
var threshold = 10000;
var secondsleft = threshold;

function LaunchCntdwn() {
	startschedule();
}

function startChecking() {
	secondsleft -= 1000;
	document.querySelector("#countdown").innerHTML = "Seconds Untill Launch " + Math.abs((secondsleft / 1000)) + " secs";
	if (secondsleft == 0) {
		
		clearInterval(interval);
		document.querySelector("#countdown").style.display = "none";
		document.querySelector("#display").style.display = "";
	}
}

function startschedule() {
	clearInterval(interval);
	secondsleft = threshold;
	document.querySelector("#countdown").innerHTML = "Seconds Untill Launch " + Math.abs((secondsleft / 1000)) + " secs";
	interval = setInterval(function() {
		startChecking();
	}, 1000)
}

function resetTimer() {
	startschedule();
}

function functionName() {
    var image = document.getElementById('Moon1');
    if (image.src.match("Moon1")) {
        image.src = "Launch.gif"
    }
 } // Tried to change the Launch Room photo to a Rocket Launching Gif by using the same code from Spacebase assignment, but it isnt working.
function play() {
	var audio = document.getElementById("audio");
    audio.play();
	}