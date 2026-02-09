const images = [
  "images/alyx.png",
  "images/sas.png",
  "images/person3.jpg",
  "images/person4.jpg",
  "images/person5.jpg",
  "images/person6.jpg"
];

let index = 0;
const img = document.getElementById("flash-image");
const overlay = document.getElementById("flash-overlay");

const flashDuration = 100;
const displayDuration = 900;
function cycleFlashImage() {
 
  overlay.style.opacity = 1;
  document.body.classList.add("bg-flash");

  setTimeout(() => {
    
    img.src = images[index];

   
    overlay.style.opacity = 0;
    document.body.classList.remove("bg-flash");

    
    index = (index + 1) % images.length;
  }, flashDuration);
}

cycleFlashImage();
setInterval(cycleFlashImage, displayDuration + flashDuration);
