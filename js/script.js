/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
  const quotes = [ { quote: "The way to get started is to quit talking and begin doing.", 
          source: 'Walt Disney', citation: 'Hubspot.com', year: '1952'},

   { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
          source: 'Steve Jobs', citation: 'Hubspot.com', year: '1981' },

   { quote: "I wish there was a way to know you’re in the good old days, before you’ve actually left them.", 
          source: 'Andy Bernard', citation: 'The Office', year: '2011' },

   { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 
          source: 'James Cameron', citation: 'Hubspot.com', year: '1998'},

   { quote: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.", 
          source: 'Michael Scott', citation: 'The Office', year: '2009'},

   { quote: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard", 
          source: 'John F Kennedy', citation: 'Hubspot.com', year: '1960'},

   { quote: "Life is what happens when you're busy making other plans", 
          source: 'John Lennon', 
       //    citation: 'Hubspot.com', year: '1972'
       } ]

/***
 * `getRandomQuote` function
***/

  getRandomQuote=function(){
  
  var randomIndex=Math.floor(Math.random()*(quotes.length));  
  var randomQuote=quotes[randomIndex];
  return randomQuote;

  }
  

/***
 * `printQuote` function
***/

function printQuote() {
var randomQuote=getRandomQuote();


var message= '<p class= "quote">' + randomQuote.quote + '</p>' + '<p class= "source">' + randomQuote.source + '<span class="citation"> ' + randomQuote.citation + ' </span><span class="year"> ' + randomQuote.year + '</span>';

// console.log(message);

if (randomQuote.citation) {
       randomQuote.citation == message
     } else {
      randomQuote.citation="N/A"
     }
if (randomQuote.year) {
       randomQuote.year == message 
     } else {
       randomQuote.year="N/A"
     }

document.getElementsByClassName("quote-box")[0].innerHTML = message;
// document.getElementsByClassName("source")[0].innerHTML = message;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);