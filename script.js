"use strict";
// Input
let getUserChoice = prompt("Choose your weapon from rock, paper or scissor:");

// All letters transformed to lowercase
getUserChoice = getUserChoice.toLowerCase();

// Computer's choice
const choices = ["rock", "paper", "scissor"];
let randomIndex = () => {
  return Math.floor(Math.random() * choices.length);
};
function getComputerChoice() {
  return choices[randomIndex()];
}

const user = getUserChoice;
const computer = getComputerChoice();
// Judgement
console.log("Computer's weapon: " + computer);
console.log("Your weapon: " + user);
let result;
function judgement(computer, user) {
  if (
    (computer === "rock" && user === "scissor") ||
    (computer === "paper" && user === "rock") ||
    (computer === "scissor" && user === "paper")
  ) {
    if (computer === "rock") {
      result = "You Lose! Rock beats Scissor 🤖 🤖 🤖";
    } else if (computer === "paper") {
      result = "You Lose! Paper beats Rock 🤖 🤖 🤖";
    } else {
      result = "You Lose! Scissor beats Paper 🤖 🤖 🤖";
    }
  } else if (
    (computer === "rock" && user === "paper") ||
    (computer === "paper" && user === "scissor") ||
    (computer === "scissor" && user === "rock")
  ) {
    if (user === "paper") {
      result = "You Win! Paper beats Rock 🧠 🧠 🧠";
    } else if (user === "scissor") {
      result = "You Win! Scissor beats Paper 🧠 🧠 🧠";
    } else {
      result = "You Win! Rock beats Scissor 🧠 🧠 🧠";
    }
  } else if (computer === user) {
    result = "Tie 🤖 ⚔ 🧠";
  } else {
    result = "Invalid weapon";
  }
  return result;
}
console.log(judgement(computer, user));
