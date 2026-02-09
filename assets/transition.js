window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      if (
        !href ||
        link.target === "_blank" ||
        href.startsWith("#") ||
        href.startsWith("mailto")
      ) return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
});
