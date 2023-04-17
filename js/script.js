// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function creates a random number.
 */
function enterClicked() {  

  // initialize variables
  let result = "";
  const MAX = 6;
  const MIN = 1;
  
  // Number user guessed 
  let userGuess = parseFloat(document.getElementById('user-guess').value);

  //Random number generator
let generator = Math.floor((Math.random() * MAX) + MIN);
  
  //Display correct or incorrect
  if (userGuess == generator) {
    result = "Congratulations you have correctly gussed the number!"
  }

  if ( userGuess != generator){ 
    result = "Sorry that is incorrect try again." 
  }
  
  // Display results back to user
  document.getElementById('result').innerHTML = result
}