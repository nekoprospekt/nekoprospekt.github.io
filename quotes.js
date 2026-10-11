const quotes = [
    "The right man in the wrong place can make all the difference in the world.",
    "Wake up and smell the ashes.",
    "This is not a rescue operation.",
    "Rise and shine, Mr. Freeman.",
    "You have chosen, or been chosen.",
    "Prepare for unforeseen consequences.",
    "We have a situation here.",
    "Do you have a plan?",
    "The world is watching.",
    "Something has changed."
];


const quoteElement = document.getElementById("quote");

let currentQuote = -1;

function changeQuote() {

    let nextQuote;

    do {
        nextQuote = Math.floor(Math.random() * quotes.length);
    } while (nextQuote === currentQuote && quotes.length > 1);

    currentQuote = nextQuote;


    // Fade out
    quoteElement.style.opacity = "0";


    setTimeout(() => {

        quoteElement.textContent = quotes[currentQuote];

        // Fade back in
        quoteElement.style.opacity = "1";

    }, 500);
}


// First quote
changeQuote();


// Change every 6 seconds
setInterval(changeQuote, 6000);