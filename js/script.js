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

// var quotes = [];
//   let emptyObject = {};
//   for(i = 0; i < 7; i++){
//     quotes.push({});
//   }
  // quotes[0]["quotes"] = "The way to get started is to quit talking and begin doing.";
  // quotes[0]["source"] = "Walt Disney";
  // quotes[0]["citation"] = "Hubspot.com";
  // quotes[1]["quotes"] = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";
  // quotes[1]["source"] = "Steve Jobs";
  // quotes[1]["citation"] = "Hubspot.com";
  // quotes[2]["quote"] = "I wish there was a way to know you’re in the good old days, before you’ve actually left them.";
  // quotes[2]["source"] = "Andy Bernard";
  // quotes[2]["citation"] = "The Office";
  // quotes[3]["quote"] = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
  // quotes[3]["source"] = "James Cameron"
  // quotes[3]["citation"] = "Hubspot.com"
  // quotes[4]["quote"] = "Life is what happens when you're busy making other plans."
  // quotes[4]["source"] = "John Lennon"
  // quotes[4]["citation"] = "hubspot.com"
  // quotes[5]["quote"] = "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised."
  // quotes[5]["source"] = "Michael Scott"
  // quotes[5]["citation"] = "The Office"
  // quotes[6]["quote"] = "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard"
  // quotes[6]["source"] = "John F Kennedy"
  // quotes[6]["citation"] = "hubspot.com"

  const quotes = [ { quote: "The way to get started is to quit talking and begin doing.", 
          source: 'Walt Disney', citation: 'Hubspot.com' },

   { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", 
          source: 'Steve Jobs', citation: 'Hubspot.com' },

   { quote: "I wish there was a way to know you’re in the good old days, before you’ve actually left them.", 
          source: 'Andy Bernard', citation: 'The Office' },

   { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 
          source: 'James Cameron', citation: 'Hubspot.com' },

   { quote: "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.", 
          source: 'Michael Scott', citation: 'The Office' },

   { quote: "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard", 
          source: 'John F Kennedy', citation: 'Hubspot.com' },

   { quote: "Life is what happens when you're busy making other plans", 
          source: 'John Lennon', citation: 'Hubspot.com' } ]


 var length = quotes.length,
 var rand = Math.round(Math.random()*(length - 1));
console.log(quotes);
function showQuote(){document.write(quotes[rand]);}
showQuote();


/***
 * `getRandomQuote` function
***/

  getRandomQuote=function(){
  
  var randomIndex=Math.floor(Math.random()*(quotes.length));  
  var quotesArr=quotes[randomIndex];
  document.getElementsByClassName("quotes")[0].innerHTML=quotesArr.quote;
  }
  
console.log(quotes);

/***
 * `printQuote` function
***/

function printQuote(message) {
  var message = "<p class='quote'>" + quotes.quote + "</p>" + "<p class='source'>" + quotes.source + "</p>";
  document.getElementById('quote-box').innerHTML = message;

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);