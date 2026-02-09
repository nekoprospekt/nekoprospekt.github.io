document.addEventListener("DOMContentLoaded", function () {
  var pluv = document.getElementById("pluv");
  var bubble = document.getElementById("pluv-bubble");

  if (!pluv || !bubble) return;

  var messages = [
    "Hi", "Under maintenance", "Nice site", "Hello", "Dont click me", "Meow",
    "Hello there", "Pls fix bugs", "My name is Pluv!", "Sadsalat hello?", "Z-Cici", "Z-Shitty",
    "Go sub to @farten1", "Im ginger", "Im made with CSS and JS!", "Im your friend", "Watch out!",
    "Click me if you dare", "I see you", "I like cookies", "Have you tried HL2?", "Follow the crow",
    "Bork bork", "Im thinking...", "Insert witty comment here", "Press buttons", "Is it snack time?",
    "Purr...", "404 fun not found", "I like 4:3 screens", "Beep boop", "I love friends!", "Dont forget to blink",
    "I see a bug", "Wanna play a game?", "Stay hydrated", "Keep scrolling", "Hello, human",
    "Not all heroes wear capes", "I am watching you...", "Pluv loves you", "Im invisible sometimes",
    "Do you like memes?", "Time for tea", "I sing in my free time", "Oops, wrong button", "Im sleepy",
    "Yay! You clicked me", "Be careful!", "I have secrets", "You found me!", "Do a barrel roll",
    "Catch me if you can", "I like pixel art", "Keep calm and game on", "I am 1337", "Hello from the other side",
    "Click me again!", "Boo!", "Follow the light", "I eat bugs (virtual ones)", "I am a CSS wizard",
    "I come in peace", "Pssst... wanna secret?", "I like potatoes", "Ssshhh...", "Beware the code",
    "High five!", "You shall not pass!", "Im not a cat"
  ];

  var flipping = true;

  pluv.addEventListener("click", function () {
    flipping = false;

    var msg = messages[Math.floor(Math.random() * messages.length)];
    bubble.textContent = msg;
    bubble.style.opacity = "1";

    pluv.style.transition = "transform 0.2s";
    bubble.style.transition = "transform 0.2s";

    // Move Pluv
    pluv.style.transform = "translateY(-15px)";
    bubble.style.transform = "translateY(-15px)";

    setTimeout(function () {
      pluv.style.transform = "translateY(0)";
      bubble.style.transform = "translateY(0)";
      flipping = true;
    }, 200);

    clearTimeout(window._pluvTimer);
    window._pluvTimer = setTimeout(function () {
      bubble.style.opacity = "0";
    }, 2200);
  });

  function randomFlip() {
    if (!flipping) return;
    if (Math.random() > 0.5) {
      pluv.style.transform = "scaleX(-1)";
    } else {
      pluv.style.transform = "scaleX(1)";
    }
  }

  setInterval(randomFlip, 2500);
});
