function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("LogText").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("LogText").innerHTML = "Badge ID is  an invalid number!";
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("Efficency at HQ.html");
    }
    if (fullName =="Richard Conway" && badgeNumb == "1337") { //Easter Egg - Supposed to play some music when you login with these credentials
       document.getElementById("LogText").innerHTML = "No matter how many times you punch that guard it will not allow you access to Mission Control"
        play2();
        changeImg1()
     }
     if (fullName =="James Hoxworth" && badgeNumb == "82714"){
         document.getElementById('LogText').innerHTML = "Welcome back from Prison Hoxton - Bain"
         play()
         changeImg2()
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

        function changeImg1() {
            var image = document.getElementById('Log_img');
            if (image.src.match("UATspaceLogo-2.jpg")) {
                image.src = "Conway-Jazz.png";
            }
        }
        function changeImg2() {
            var image = document.getElementById('Log_img');
            if (image.src.match("UATspaceLogo-2.jpg")) {
                image.src = "HoxBreakout.webp";
            }
        }