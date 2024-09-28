/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suits = [
  { symbol: "♥", name: "hearts" },
  { symbol: "♠", name: "spades" },
  { symbol: "♦", name: "diamonds" },
  { symbol: "♣", name: "clubs" }
];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function generateRandomCard() {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("card-top").textContent = randomSuit.symbol;
  document.getElementById("card-value").textContent = randomValue;
  document.getElementById("card-bottom").textContent = randomSuit.symbol;

  let cardContainer = document.getElementById("card-container");
  cardContainer.className = `card d-flex flex-column justify-content-between ${randomSuit.name}`;
}

window.onload = generateRandomCard;
