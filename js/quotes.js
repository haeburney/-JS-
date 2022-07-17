const quotes = [
{
    quote : "I've failed over and over and over again in my life and that is why I succeed.",
    author : "Michael Jordan",
},
{
    quote : "Life is either a daring adventure or nothing at all.",
    author : "Helen Keller",
},
{
    quote : "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author : "Dr.Seuss",
},
{
    quote : "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author : "Maxime Lagacé",
},
{
    quote : "Life is from the inside out. When yout shift on the inside, life shifts on the outside.",
    author : "Kamal Ravikant",
},
{
    quote : "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
    author : "Jackie Robinson",
},
{
    quote : "The way to get started is quit talking and begin doing.",
    author : "Walt Disney",
},
{
    quote : "If you are not willing to risk the usual, you will have to settle for the ordinary",
    author : "Jim Rohn",
},
{
    quote : "The ones who are crazy enough to think they can change the world, are the ones that do.",
    author : "Steve Jobs",
},
{
    quote : "Do one thing every day that scares you.",
    author : "Eleanor Roosevelt"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;