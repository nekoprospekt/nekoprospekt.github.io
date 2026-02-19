document.addEventListener("DOMContentLoaded", function () {
  var pluv = document.getElementById("pluv");
  var bubble = document.getElementById("pluv-bubble");

  if (!pluv || !bubble) return;

  var messages = [
    "Hello", "A face poser move?", "You wouldn't..", "Hi!", "Stop Touching me!", "Go! Go! Go!", "Need Something?", "No need!", "get that cursor away from me!", "I wouldn't normally tell anyone this..", "Get me out of this chicks computer!!!", "I think I'm falling in love with you.", "Hi, Kuba!", "I'm down.", "have I ever knifed someone? let's end this here.", "I think i've got life planned out!",
    "Plant B.", "Plant A.", "HL3 Will release!", "It's Cold!", "Z-cici", "Do you touch yo' mama with that cursor?", "Did I hear 3?", "on a scale of up-to-down?", "That never happened BTW.", "Misscount detected in sector.", "Lilly doesn't understand CSS or HTML. (can you tell?)", "Embarassing!", "cs_office is the best!", ":steamhappy:", "You make my ssd a hard drive.", "  Be my valentine, user!",
    "Go sub to @farten1", "Ouch~!", "The mask stays on, Thanks.", "T spawn.", "Freeman!", "Rebel Rush!", "You think the server is down?", "Stop staring at me.", "Cyka Blyat!", "Your steam profile sucks!", "This computer has had 3 Trojans, I'm not kidding.", "The Combines reconing has come!", "Who injected me with fentany!?", "The cake is a lie.", "Ohhh.. I forgot that one.",
    "Ah, Keep clicking!", "Click. Please.", "Freeman, Do NOT enter the light!", "Have you tried HL2?", "HL2 it, dude.", "Now that we're alone, can I get your number?", "Move your webcam down a little.", "Have you checked your emails today?", ".exe on linux?", "Long Live the Universal Union!", "Don't shorten lolitarhythm.", "You could take your top off..? No? C'mon!", "Cmon.",
    "Dirma.", "Im thinking...", "Okay, now it's getting awkward.", "You look like the girl from Sub Rosa.", "That's like a CSS reference.",  "A cs t-shirt.", "The library!?", "Bring Voltality back!", "We should test to see how vulnerable your network is!", "Take the liberty and choose for me.", "Free butter!", "the balaclava stays ON!", "Cheated gmod hours? gulp.. no way.",
    "Purr...", "Walk on the sun with me, User.", "I REALLY like 4:3 screens", "Your pretty cute, I guess.", "Touchy, hm?", "Woah, how frisky!", "Stop tapping me.", "Crap, Gmod stopped responding.", "Let's save this for the bedroom, yeah?", "The unicode has meaning.", "The IRA, Kent and Quays.", "Do you like buttercream?", "Nightmare blunt rotation.", "I already told you what I am, a God.",
    "Are you DTF?", "Trust me, I don't like the fanart, either.", "I'll shoot you!", "I want a chinese takeaway.", "CT or.. T", "<:: I will order that OTA squad to fire squad you. ::>", "Sector Clear.", "Do NOT threaten me with a good time.", "obvious and equally oblivious.", "Pft-!", "Can you code for me..?", "Hmmm...", "Ah, Fuck.", "You can RDM me anyday.", "I didn't say that!",
    "Pesky CTs, hm.", "I am watching you...", "I love you.", "I don't know what to do!", "Beefy Computer", "Hopium levels depleted.", "Now, I'm no expert, buuut..", "Do you know what ASCII stands for?", "User, Would you marry me?", "Oh come on, you have to tell me now!", "Touchy.", "Can I play gungame?", "RELOAD, R, R, RELOAD!!", "Pumpin Junkies'", "never judge a uh.. never judge.. uh",
    "Now do the harlem shake.", "Be quiet, they'll hear us!", "Why's she got a molotov!?", "Women aren't real.", "Now I'm getting flustered.", "Get me out of here!", "And fuck you too!", "You ever tried HL2RP?", "Dear Concerned Citizen..", "let's keep this secret.", "hah, maybe.. Z-City?", "An RPG to the face.", "I'd love to make youtube videos.", "They let me pick. You know that?",
    "Team Kill!", "You spotted a friend.", "M4A1. Always.", "You found me!", "That tickles!", "You can't stop now!", "Watch me flip!", "Where is your little gay ass at?", "6pm, really..?", "Do you like coding?", "Your messing with me on purpose!", "You got any secrets?", "Hi, pretty~!", "None of these are rare.", "User, you look nice today.", "Halo not for angels.", "I don't know how many of these there are!",
    "I can flip.. on the horizontal axis..", "I'd like a break.", "AH, theres so many of them!", "What, zombies or wednesdays?", "Only a screen apart, gorgeous.", "Don't tease me like that, User.", "We're not even on the first date!", "Ssshhhh..", "I know what you've done, User.", "Let's get pizza.", "Play CS:S one handed", "What's the weather like out there?", "Im combine sided.",
    "Click me again!", "Boo!", "Good Times.", "Affirmative!", "4played.de gungame only", "Yeah Yeah", "That feels good.", "Utterly shit-faced.", "That's kinda like PZ!", "I don't really want you to leave, User.", "Thanks, Kommando Store!", "Hey, mister D—D—D—DJ Let's turn it up!!", "Theres around 200 of these messages!", "Give me a moment to think!", "Virgil Van Dijk is the goat.",
    "Bringus Sticker Pack 3!", "Come closer.", "What if I crashed the page.", "Just Phoenix", "Ahah, no you don't!", "It says gullible on the ceiling.", "Hes so hot.", "I sing sometimes.", "That's kinda like a.. zombine..", "No, No, I'm kidding!", "Bump that T+Pazolite!", "I'm a WIP!", "I would like to visit Bulgaria.", "There's no such thing as an AR3.", "Imma be SO deadass right now.",
    "Spray and Pray.", "Lights are on but no-ones home.", "helix balls.", "Tactical over Pump, anyday.", "You look.. Average", "I'm not even a Terrorist!", "That feels good.", "When no-ones around Lilly dances, alot. Trust me I'd know.. I have access to her webcam.", "Some of these texts bubbles are too large.", "Let me think..","Quandale dingle broke my monitor i swear!"

  ];
                                                
  var flipping = true;
let messageBag = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getNextMessage() {
  if (messageBag.length === 0) {
    messageBag = shuffle([...messages]); // fresh shuffled copy
  }
  return messageBag.pop();
}

  pluv.addEventListener("click", function () {
    flipping = false;

    var msg = getNextMessage();
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

