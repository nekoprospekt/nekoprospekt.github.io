const feed = document.getElementById("kill-feed");

const MAX_KILLS = 6;
const KILL_LIFETIME = 6000;

// ---- PLAYERS (edit names + bias here) ----
const players = [
  { name: "nekoprospekt", headshotBias: 0.14 },
  { name: "FartenYT", headshotBias: 0.43 },
  { name: "flwrlena", headshotBias: 0.0 },
  { name: "[UNSC]incode7", headshotBias: 0.10 },
  { name: "candyheartache", headshotBias: 0.37 },
  { name: "probablyahewker", headshotBias: 0.10 },
  { name: "EggyAverage", headshotBias: 0.10 },
  { name: "Mă drogez | romania", headshotBias: 0.10 },
  { name: "faifai", headshotBias: 0.09 },
  { name: "MeQuot", headshotBias: 0.22 },
  { name: "lesbian isreali labubu porn", headshotBias: 0.30 },
  { name: "void", headshotBias: 0.20 },
  { name: "chips92", headshotBias: 0.19 },
  { name: "RobertGamerCool1998", headshotBias: 0.18 },
  { name: "jusjoe", headshotBias: 0.18 },
];

// ---- HL2MP weapon glyphs (VALID ONLY) ----
const weapons = [
  "1","2","3","4","6","7","8","9","0",".","/","-"
];

// ---- csd glyph pool (VALID ONLY) ----
const csdGlyphs = [
  "q","w","e","r","t","y","u","i","o",
  "a","s","d","f","j","k","l",
  "z","x","c","v","b","n","m",
  "A","B"
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickPlayers() {
  let killer, victim;
  do {
    killer = rand(players);
    victim = rand(players);
  } while (killer === victim);
  return { killer, victim };
}

function createKill() {
  const { killer, victim } = pickPlayers();

  // Most kills are HL2MP, some are csd
  const useCsd = Math.random() < 0.25; // 25% csd k

  let iconHTML = "";

  if (useCsd) {
    // csd kill
    const base = rand(csdGlyphs);

    // headshot ONLY apply to csd
    const isHeadshot = Math.random() < killer.headshotBias;
    const csdChar = isHeadshot ? base + "D" : base;

    iconHTML = `<span class="headshot">${csdChar}</span>`;
  } else {
    // HL2MP weapon kill
    const weapon = rand(weapons);
    iconHTML = `<span class="weapon">${weapon}</span>`;
  }

  const kill = document.createElement("div");
  kill.className = "kill";

  kill.innerHTML = `
    <span class="killer">${killer.name}</span>
    ${iconHTML}
    <span class="victim">${victim.name}</span>
  `;

  feed.prepend(kill);

  // enforce max 3 k
  while (feed.children.length > MAX_KILLS) {
    feed.removeChild(feed.lastChild);
  }

  // fade out
  setTimeout(() => {
    kill.classList.add("fade");
    setTimeout(() => kill.remove(), 340);
  }, KILL_LIFETIME);
}


// loop
function scheduleNextKill() {
  createKill();

  // rd between kills
  // burst
  const delay = Math.random() < 0.3
    ? randBetween(200, 4000)   // burst kills
    : randBetween(1200, 5000); // normal pacing

  setTimeout(scheduleNextKill, delay);
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

scheduleNextKill();


// This bs is ALL ai generated, im saying now.