// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let loadQuote = document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let body = document.querySelector('body');
let quote = document.querySelector('.quote');
let source = document.querySelector('.source');
let tag = document.querySelector('.tag');

// array containing 10 quote objects, each with 4 key pairs

let quotes = [{
    quote: "...Bond. James Bond.",
    source: "Sean Connery",
    citation: "Dr. No",
    year: "1962",
    tag: "Action"
  },
  {
    quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    source: "Humphrey Bogart",
    citation: "Casablanca",
    // year: "1942",
    tag: "Romance"
  },
  {
    quote: "Well, it's not the men in your life that counts, it's the life in your men.",
    source: "Mae West",
    // citation: "I'm No Angel",
    year: "1933",
    tag: "Romance"
  },
  {
    quote: "I'll be back.",
    source: "Arnold Schwarzenegger",
    // citation: "The Terminator",
    // year: "1984",
    tag: "Action"
  },
  {
    quote: "Would you be shocked if I put on something more comfortable?",
    source: "Jean Harlow",
    citation: "Hell's Angels",
    year: "1930",
    tag: "Action"
  },
  {
    quote: "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get.'",
    source: "Tom Hanks",
    citation: "Forrest Gump",
    year: "1994",
    tag: "Romance"
  },
  {
    quote: "I could dance with you till the cows come home...On second thought, I'd rather dance with the cows when you came home.",
    source: "Groucho Marx",
    citation: "Duck Soup",
    year: "1933",
    tag: "Comedy"
  },
  {
    quote: "Frankly, my dear, I don't give a damn!",
    source: "Clark Gable",
    citation: "Gone With the Wind",
    year: "1939",
    tag: "Romance"
  },
  {
    quote: "You talkin' to me? You talkin' to me? You talkin' to me? Well, who the hell else are you talkin' to?",
    source: "Robert De Niro",
    citation: "Taxi Driver",
    year: "1976",
    tag: "Drama"
  },
  {
    quote: "Gimme a whiskey, ginger ale on the side. And don't be stingy, baby.",
    source: "Greta Garbo",
    citation: "Anna Christie",
    year: "1930",
    tag: "Drama"
  }
];

// array containing 10 background color values

let bgColors = ['red', 'pink', 'blue', 'purple', 'green', 'orange', 'gray', 'gold', 'khaki', 'coral'];

// function to create random number

function getRandomNumber(upper, lower) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
};

// function to create random number

function getRandomQuote() {
  randomQuote = quotes[getRandomNumber(9, 0)];
  return randomQuote;
}

function getRandomBg() {
  randomBg = bgColors[getRandomNumber(9, 0)];
  return randomBg;
}

// printQuote function

function printQuote() {

  getRandomBg()
  getRandomQuote()

  body.style.backgroundColor = randomBg;

  if (randomQuote.hasOwnProperty('citation') && randomQuote.hasOwnProperty('year')) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML = randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span>';
  } else if (randomQuote.hasOwnProperty('citation')) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML = randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>';
  } else if (randomQuote.hasOwnProperty('year')) {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML = randomQuote.source + '<span class="year">' + randomQuote.year + '</span>';
  } else {
    quote.innerHTML = randomQuote.quote;
    source.innerHTML = randomQuote.source;
  }

  if (randomQuote.hasOwnProperty('tag')) {
    tag.innerHTML = randomQuote.tag;
  }
}

// call printQuote every 30 seconds

setInterval(function(){ printQuote() }, 3000)
