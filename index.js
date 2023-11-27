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
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        message: 'Describe the purpose of this project?',
        name: 'description',
        
      },
    {
      type: 'input',
      message: 'Instructions to follow?',
      name: 'instructions',
      
    },
    {
        type: 'input',
        message: 'Please provide url that will deploy this app.',
        name: 'link',
        
      },
      {
        type: 'input',
        message: 'provide relative path to the image of the screenshots.',
        name: 'screenshot',
        
      },
    {
        type: 'input',
        message: 'are there any contributors (use Github usernames)?',
        name: 'contributors',
        
      },
      {
        type: 'checkbox',
        message: 'which license did you use for this project?',
        name: 'license',
        choices: [
            {name:'MIT'},
            {name: 'GPL'} , 
            {name: 'Apache'},
            {name: 'GNU'}, 
            {name:'BSD 2'},
            {name: 'BSD 3'} , 
            {name: 'Boost Software'},
            {name: 'Mozilla'}, 
            {name: 'Creative Commons Zero'},
            {name: 'N/A'},
        ], 
      },
      {
        type: 'input',
        message: 'provide walkthrough of the app?',
        name: 'test',
        
      },
      {
        type: 'input',
        message: 'what are the technologies and languages used in this project?',
        name: 'usage',
       
      },
      {
        type: 'input',
        message: 'Github username?',
        name: 'creator',
      
      },
      {
        type: 'input',
        message: 'e-mail?',
        name: 'email',
        
      }
      
    ]

// function to write README file
async function writeToFileAsync(fileName, data) {
    try {
        await fs.promises.writeFile(fileName, data);
        console.log("File written successfully!");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

//  function writeToFile(fileName, data) {
// return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log ("creating Professional README.md File..");
        writeToFileAsync("./misc/README.md", generateMarkdown({ ...responses}));
    });
}
    init();
