// event listener to respond to #loadQuote button clicks
// when the user clicks the button, the printQuote function is called
let loadQuote = document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

let body = document.querySelector("body");
let quote = document.querySelector(".quote");
let source = document.querySelector(".source");
let tag = document.querySelector(".tag");

// array containing 10 quote objects, each with 4 key pairs

let quotes = [
  {
    quote: "...Bond. James Bond.",
    source: "Sean Connery",
    citation: "Dr. No",
    year: "1962",
    tag: "Action",
  },
  {
    quote:
      "Of all the gin joints in all the towns in all the world, she walks into mine.",
    source: "Humphrey Bogart",
    citation: "Casablanca",
    tag: "Romance",
  },
  {
    quote:
      "Well, it's not the men in your life that counts, it's the life in your men.",
    source: "Mae West",
    year: "1933",
    tag: "Romance",
  },
  {
    quote: "I'll be back.",
    source: "Arnold Schwarzenegger",
    tag: "Action",
  },
  {
    quote: "Would you be shocked if I put on something more comfortable?",
    source: "Jean Harlow",
    citation: "Hell's Angels",
    year: "1930",
    tag: "Action",
  },
  {
    quote:
      "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get.'",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: "1994",
    tag: "Romance",
  },
  {
    quote:
      "I could dance with you till the cows come home...On second thought, I'd rather dance with the cows when you came home.",
    source: "Groucho Marx",
    citation: "Duck Soup",
    year: "1933",
    tag: "Comedy",
  },
  {
    quote: "Frankly, my dear, I don't give a damn!",
    source: "Clark Gable",
    citation: "Gone With the Wind",
    year: "1939",
    tag: "Romance",
  },
  {
    quote:
      "You talkin' to me? You talkin' to me? You talkin' to me? Well, who the hell else are you talkin' to?",
    source: "Robert De Niro",
    citation: "Taxi Driver",
    year: "1976",
    tag: "Drama",
  },
  {
    quote:
      "Gimme a whiskey, ginger ale on the side. And don't be stingy, baby.",
    source: "Greta Garbo",
    citation: "Anna Christie",
    year: "1930",
    tag: "Drama",
  },
];

// array containing 10 background color values

let bgColors = [
  "red",
  "pink",
  "blue",
  "purple",
  "green",
  "orange",
  "gray",
  "gold",
  "khaki",
  "coral",
];

// create random number between two input bounds

function getRandomNumber(upper, lower) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

// use getRandomNumber to select a random object from randomQuote

function getRandomQuote() {
  randomQuote = quotes[getRandomNumber(9, 0)];
  return randomQuote;
}

// do the same with the array of background colors

function getRandomBg() {
  randomBg = bgColors[getRandomNumber(9, 0)];
  return randomBg;
}

// run getRandomQuote & getRandomBg, apply background to body variable + populate document with randomQuote

function printQuote() {
  getRandomBg();
  getRandomQuote();

  body.style.backgroundColor = randomBg;

  if (
    randomQuote.hasOwnProperty("citation") &&
    randomQuote.hasOwnProperty("year")
  ) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML =
      randomQuote.source +
      '<span class="citation">' +
      randomQuote.citation +
      '</span><span class="year">' +
      randomQuote.year +
      "</span>";
    // check for missing property
  } else if (randomQuote.hasOwnProperty("citation")) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML =
      randomQuote.source +
      '<span class="citation">' +
      randomQuote.citation +
      "</span>";
    // check for missing property
  } else if (randomQuote.hasOwnProperty("year")) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML =
      randomQuote.source + '<span class="year">' + randomQuote.year + "</span>";
    // if both fail, assign minimum content
  } else {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML = randomQuote.source;
  }
  // check for missing property
  if (randomQuote.hasOwnProperty("tag")) {
    tag.innerHTML = randomQuote.tag;
  }
}

// also call printQuote every 30 seconds

setInterval(function () {
  printQuote();
}, 3000);
