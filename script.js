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

const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color');
const body = document.querySelector('#gradient');

setGradient = () => {
   body.style.background = linearGradient();
   css.textContent = `${body.style.background};`;
}

linearGradient = () => {
   return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
