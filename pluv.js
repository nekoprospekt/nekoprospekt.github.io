document.addEventListener("DOMContentLoaded", function () {
  var pluv = document.getElementById("pluv");
  var bubble = document.getElementById("pluv-bubble");

  if (!pluv || !bubble) return;

  var messages = [
    "Hello", "A face poser move?", "You wouldn't..", "Hi!", "Stop Touching me!", "Go! Go! Go!", "Need Something?", "No need!", "get that cursor away from me!", "I wouldn't normally tell anyone this..",
    "Plant B.", "Plant A.", "HL3 Will realease!", "It's Cold!", "Z-cici", "Do you touch yo' mama with that cursor?", "Did I hear 3?", "on a scale of up-to-down?", "That never happened BTW.", "Misscount detected in sector.",
    "Go sub to @farten1", "Ouch~!", "The mask stays on, Thanks.", "T spawn.", "Freeman!", "Rebel Rush!", "You think the server is down?", "Stop staring at me.", "Cyka Blyat!", "Your steam profile sucks!",
    "Ah, Keep clicking!", "Click. Please.", "Freeman, Do NOT enter the light!", "Have you tried HL2?", "HL2 it, dude.", "Now that we're alone, can I get your number?", "Move your webcam down a little.",
    "Dirma.", "Im thinking...", "Okay, now it's getting awkward.", "You look like the girl from Sub Rosa.", "That's like a CSS reference.",  "A cs t-shirt.", "The library!?", "Bring Voltality back!",
    "Purr...", "Walk on the sun with me, User.", "I REALLY like 4:3 screens", "Your pretty cute, I guess.", "Touchy, hm?", "Woah, how frisky!", "Stop tapping me.", "Crap, Gmod stopped responding.", "Let's save this for the bedroom, yeah?",
    "Are you DTF?", "Trust me, I don't like the fanart, either.", "I'll shoot you!", "I want a chinese takeaway.", "CT or.. T", "<:: I will order that OTA squad to fire squad you. ::>", "Sector Clear.",
    "Pesky CTs, hm.", "I am watching you...", "I love you.", "I don't know what to do!", "Beefy Computer", "Hopium levels depleted.", "Now, I'm no expert, buuut..", "Do you know what ASCII stands for?",
    "Now do the harlem shake.", "Be quiet, they'll hear us!", "Why's she got a molotov!?", "Women aren't real.", "Now I'm getting flustered.", "Get me out of here!", "And fuck you too!", "You ever tried HL2RP?",
    "Team Kill!", "You spotted a friend.", "M4A1. Always.", "You found me!", "That tickles!", "You can't stop now!", "Watch me flip!", "Where is your little gay ass at?", "6, really..?", "Do you like coding?",
    "I can flip.. on the horizontal axis..", "I'd like a break.", "AH, theres so many of them!", "What, zombies or wednesdays?", "Only a screen apart, gorgeous.", "Don't tease me like that, User.", "We're not even on the first date!",
    "Click me again!", "Boo!", "Good Times.", "Affirmative!", "4played.de gungame only", "Yeah Yeah", "That feels good.", "Utterly shit-faced.", "That's kinda like PZ!", "I don't really want you to leave, User.",
    "Bringus Sticker Pack 3!", "Come closer.", "What if I crashed the page.", "Just Phoenix", "Ahah, no you don't!", "It says gullible on the ceiling.", "Hes so hot.", "I sing sometimes.", "That's kinda like a.. zombine..",
    "Spray and Pray.", "Lights are on but no-ones home.", "helix balls.", "Tactical over Pump, anyday.", "You look.. Average", "I'm not even a Terrorist!", "That feels good."

  ];
                                                
  var flipping = true;

  pluv.addEventListener("click", function () {
    flipping = false;

    var msg = messages[Math.floor(Math.random() * messages.length)];
    bubble.textContent = msg;
    bubble.style.opacity = "1";
    // uhh he like does the flip around
    pluv.style.transition = "transform 0.2s";
    bubble.style.transition = "transform 0.2s";

    // Bounce Bounce pluv
    pluv.style.transform = "translateY(-18px)";
    bubble.style.transform = "translateY(-16px)";

    setTimeout(function () {
      pluv.style.transform = "translateY(0)";
      bubble.style.transform = "translateY(0)";
      flipping = true;
    }, 200);
    // you wont under stand this but its for if clicked he wont flip around just bounce
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

