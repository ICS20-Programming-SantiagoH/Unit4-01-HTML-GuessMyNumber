// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the sphere.
 */
function displayStatment() {  

  // initialize variables
  let statment = ""
  
  // Data being collected 
  let userGuess = parseFloat(document.getElementById('userGuess').value);

  //Data being processed
  if (userGuess == number) {
    statment = "You are correct, GREAT JOB!"
  }

  //Data being processed
  if (userGuess != number) {
    statment = "You are incorect, try again."
  }
  
  // Data being shown
  document.getElementById('statment').innerHTML = statment
}