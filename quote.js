const quotes = [
    {
      quote: "There is no gate, no lock, no bolt that you can set upon the freedom of my mind",
      author: "Virginia Wolf",
    },
    {
      quote: "Good girls go to heaven and bad girls go everywhere",
      author: "Helen Gurley Brown",
    },
    {
      quote:
        "When in doubt, choose change",
      author: "Lily Leung-",
    },
    {
      quote: "The expert in anything was once a beginner",
      author: "Anonymous",
    },
    {
      quote: "Start where you are. Use what you have. Do what you can",
      author: "Arthur Ashe",
    },
    {
      quote: "I am a free human being with an independent will",
      author: "Charlotte Bronte",
    },
    {
      quote: "The phoenix must burn to emerge",
      author: "Janet Fitch",
    },
    {
      quote: " Don’t follow the crowd, let the crowd follow you",
      author: "Margaret Thatcher",
    },
  ];
  

const lyric = document.querySelector('#quote');
const singer = document.querySelector('#author');


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todayQuote.quote}`;
author.innerText = todayQuote.author;