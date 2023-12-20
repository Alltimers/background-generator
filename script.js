$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});

document.getElementById('file-upload').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("file-upload").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.getElementById('image').style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
