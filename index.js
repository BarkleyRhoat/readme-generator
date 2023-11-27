// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Created an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the project name?',
      validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Describe the purpose of this project?',
        name: 'description',
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
        message: 'Please provide url that will deploy this app.',
        name: 'link',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'input',
        message: 'provide relative path to the image of the screenshots.',
        name: 'screenshot',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
    {
        type: 'input',
        message: 'are there any contributors (use Github usernames)?',
        name: 'contributors',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'list',
        message: 'which license did you use for this project?',
        name: 'license',
        choice: ['the MIT License', 'the GPL License', 'Apache license', 'GNU license', 'N/A'],
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'input',
        message: 'provide walkthrough of the app?',
        name: 'test',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'input',
        message: 'what are the technologies and languages used in this project?',
        name: 'usage',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'input',
        message: 'Github username?',
        name: 'creator',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      },
      {
        type: 'input',
        message: 'e-mail?',
        name: 'email',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
      }
      
  ]

// function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log ("creating Professional README.md File..");
        writeToFile("./misc", generateMarkdown({ ...responses}));
    });
}
    init();
