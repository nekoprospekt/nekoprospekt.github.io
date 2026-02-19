document.addEventListener("dblclick", (e) => {
  if (e.target.closest("a")) return;

  window.location.href = "index.html";
});
