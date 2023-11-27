// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project name?',
      validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
      type: 'input',
      message: 'how do you install the app?',
      name: 'installation',
      validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
      type: 'input',
      message: 'Instructions to follow?',
      name: 'instructions',
      validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'are there any credits?',
        name: 'credits',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
  ])
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // ... ask the questions here
    let responses = {
        title: ""
    }
    console.log(generateMarkdown(responses));
}

// Function call to initialize app
init();
