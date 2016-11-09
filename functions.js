var imgArray = [
 "url('bg/background1.png')",
 "url('bg/background3.png')",
 "url('bg/background4.png')",
 "url('bg/background6.png')",
 "url('bg/background7.png')",
 "url('bg/background8.png')",
 "url('bg/background9.png')"
            ];

var numOfImg = imgArray.length;
function randomImg(){
  var randomNum = Math.floor(Math.random()*numOfImg);
  document.body.style.backgroundImage = imgArray[randomNum];
}
setInterval(randomImg,10000);


  function doneverwhere () {
    var neverwhere; //Final location name
    var basename; //Base location name
    var rand;

    //Decide if base location name is 2 or 3 syllables and randomly produce it
    rand = Math.random();
    if (rand<=twosyllables) {
      basename = three[Math.random() * three.length>>0] + four[Math.random() * four.length>>0];
    } else {
      basename = three[Math.random() * three.length>>0] + four[Math.random() * four.length>>0] + five[Math.random() * five.length>>0] ;
    }

    //Decide if there is an article/adjective in the beginning and randomly select it
    rand = Math.random();
    if (rand<=adjectives) {
      neverwhere = one[Math.random() * one.length>>0] + " ";
    } else {
      neverwhere = "";
    }

    //Decide if there is location identifier, whether it is at the beginning or at the end, and randomly select it
    rand = Math.random();
    if (rand<=beginningid) {
      neverwhere = neverwhere + two[Math.random() * two.length>>0] + " " + basename;
    } else if (rand>beginningid && rand<=endingid) {
      neverwhere = neverwhere + basename + " " + six[Math.random() * six.length>>0];
    } else {
      neverwhere = neverwhere + basename;
    }

    //Write the final location name on screen
    document.getElementById("main").value = neverwhere;
    $(".output").append(neverwhere+", ");

  }
  function statistics() {
    var total = (one.length+1)*(two.length+1)*three.length*four.length*(five.length+1)*(six.length+1);
    document.getElementById("stats").innerHTML = "Statistically speaking one in " + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " chance, unless such a place already exists.";
  }

function save2cookie () {
    document.cookie = "neverwhere="+document.getElementById("cookieoutput").value;
}

function readcookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function appendcookie() {
  var x = readcookie('neverwhere')
  if (x) {
    $(".output").append(x);
  }
}

window.onload=function(){
randomImg();
readcookie("neverwhere");
appendcookie();
}
