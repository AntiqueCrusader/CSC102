function setdata(){
    document.getElementById("Start").disabled = true;
    document.getElementById("Stop").disabled = false;
}

var timeout, interval
var threshold = 10000;
var secondsleft = threshold;

function startChecking() {
	secondsleft -= 1000;
	document.querySelector("#countdown").innerHTML = "Seconds Untill the data required is Recored " + Math.abs((secondsleft / 1000)) + " secs";
	if (secondsleft == 0) {
		
		clearInterval(interval);
		document.querySelector("#countdown").style.display = "none";
		document.querySelector("#display").style.display = "";
        SetNumbers()
        stop()
	}
}

function starttimer() {
	clearInterval(interval);
	secondsleft = threshold;
	document.querySelector("#countdown").innerHTML = "Seconds Untill the data required is Recored " + Math.abs((secondsleft / 1000)) + " secs";
	interval = setInterval(function() {
		startChecking();
	}, 1000)
}

function SetNumbers(){ //Sets the Waiting for Data Input and Null to the Correct data After 10 Seconds//
    document.getElementById("numbers").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>"
    document.getElementById("numbers").rows["latitude"].innerHTML = "<td>Latitude:</td><td>0</td>";
    document.getElementById("numbers").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("numbers").rows["gps_altitude"].innerHTML ="<td>GPS Altitude:</td><td>0</td>"
    document.getElementById("numbers").rows["bmpSensor_altitude"].innerHTML ="<td>BMP Sensor Altitude:</td><td>30383.04</td>"
    document.getElementById("numbers").rows["bmpSensor_pressure"].innerHTML ="<td>BMP Sensor Pressure:</td><td>2.34</td>"
    document.getElementById("numbers").rows["bmpSensor_temp"].innerHTML ="<td>BMP Sensor Temp:</td><td>0</td>"
    document.getElementById("numbers").rows["bdigSensor_temp"].innerHTML ="<td>Digital Sensor Temp:</td><td>24.12</td>"
    document.getElementById("numbers").rows["cssSensor_temp"].innerHTML ="<td>CSS Sensor Temp:</td><td>25</td>"
    document.getElementById("numbers").rows["cssSensor_eCO2"].innerHTML ="<td>CSS Sensor eCO2:</td><td>400</td>"
    document.getElementById("numbers").rows["cssSensor_TVOC"].innerHTML ="<td>CSS Sensor TVOC:</td><td>0</td>"
    document.getElementById("numbers").rows["UV"].innerHTML ="<td>UV:</td><td>0</td>"
    document.getElementById("numbers").rows["accelX"].innerHTML ="<td>accelX:</td><td>-0.87</td>"
    document.getElementById("numbers").rows["accelY"].innerHTML ="<td>accelY:</td><td>-0.02</td>"
    document.getElementById("numbers").rows["accelZ"].innerHTML ="<td>accelZ:</td><td>9.61</td>"
    document.getElementById("numbers").rows["gyroX"].innerHTML ="<td>gyroX:</td><td>0.13</td>"
    document.getElementById("numbers").rows["gyroY"].innerHTML ="<td>gyroY:</td><td>0.57</td>"
    document.getElementById("numbers").rows["gyroZ"].innerHTML ="<td>gyroY:</td><td>-0.24</td>"
    document.getElementById("numbers").rows["magneticX"].innerHTML ="<td>magneticX:</td><td>4.66</td>"
    document.getElementById("numbers").rows["magneticY"].innerHTML ="<td>magneticY:</td><td>0.01</td>"
    document.getElementById("numbers").rows["magneticZ"].innerHTML ="<td>magneticZ:</td><td>-0.4</td>"
}
function startChecking2() { //Timer2 for Reset
	secondsleft -= 1000;
	document.querySelector("#countdown2").innerHTML = "Seconds Untill the data is Reset" + Math.abs((secondsleft / 1000)) + " secs";
	if (secondsleft == 0) {
		
		clearInterval(interval);
		document.querySelector("#countdown2").style.display = "none";
		document.querySelector("#display2").style.display = "";
        ClearNumbers()
        stop()
	}
}

function Reset() {
	clearInterval(interval);
	secondsleft = threshold;
	document.querySelector("#countdown2").innerHTML = "Seconds Untill the data is Reset " + Math.abs((secondsleft / 1000)) + " secs";
	interval = setInterval(function() {
		startChecking2();
	}, 1000)
}
function ClearNumbers() { //Reset button, After 10 seconds sets all the previous data back to Null and Waiting for Data input and disables the Reset button//
    document.getElementById("numbers").rows["seconds"].innerHTML = "<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["latitude"].innerHTML = "<td>Waiting for Data Input</td><td>Null</td>";
    document.getElementById("numbers").rows["longitude"].innerHTML = "<td>Waiting for Data Input</td><td>Null</td>";
    document.getElementById("numbers").rows["gps_altitude"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["bmpSensor_altitude"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["bmpSensor_pressure"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["bmpSensor_temp"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["bdigSensor_temp"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["cssSensor_temp"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["cssSensor_eCO2"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["cssSensor_TVOC"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["UV"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["accelX"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["accelY"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["accelZ"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["gyroX"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["gyroY"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["gyroZ"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["magneticX"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["magneticY"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("numbers").rows["magneticZ"].innerHTML ="<td>Waiting for Data Input</td><td>Null</td>"
    document.getElementById("Start").disabled = false;
    document.getElementById("Stop").disabled = true;
}

function play() {
	var audio = document.getElementById("audio");
    audio.play();
}

function stop() {
    var audio = document.getElementById("audio");
    audio.pause()
    audio.load()
}