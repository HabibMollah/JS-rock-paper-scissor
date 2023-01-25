"use strict";
// Input
let getUserChoice = prompt("Choose your weapon from rock, paper or scissor:");

// All letters transformed to lowercase
getUserChoice = getUserChoice.toLowerCase();

// Computer's choice
const choices = ["rock ", "paper", "scissor"];
let randomIndex = () => {
  return Math.floor(Math.random() * choices.length);
};
function getComputerChoice() {
  return choices[randomIndex()];
}

// Judgement
console.log(`Your weapon is ${getUserChoice}.`);
console.log(`Computer's weapon is ${getComputerChoice()}`);
