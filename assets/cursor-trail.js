const canvas = document.getElementById("cursor-trail");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

ctx.fillStyle = "rgba(0,0,0,0.15)";

document.addEventListener("mousemove", (e) => {

  ctx.globalCompositeOperation = "source-over";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
  ctx.fill();
});
