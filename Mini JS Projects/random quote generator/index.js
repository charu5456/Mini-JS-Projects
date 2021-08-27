document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
		source: "Samuel Beckett",
		citation: "",
		year: "",
	},
	{
		quote: "Strive not to be a success, but rather to be of value.",
		source: "Albert Einstein",
		year: "1879 - 1955",
		
	},
	{
		quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
		source: "Amelia Earhart",
		citation: "",
		year: "1897 - 1937",
		
	},
	{
		quote: "Definiteness of purpose is the starting point of all achievement. ",
		source: "W. Clement Stone",
		citation: "",
		year: "1902 - 2002",
	
	},
	{
		quote: " I attribute my success to this: I never gave or took any excuse. ",
		source: "Florence Nightingale",
		citation: "",
		year: "",
	
	},
	{
		quote: "Pain is temporary. Quitting lasts forever.",
		source: "Lance Armstrong",
		citation: "",
		year: "1999 - 2005",
		
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h1>' + quotes.tags + '</h1>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}