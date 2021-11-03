// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation to build this project?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does this project solve?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party APIs, or tutorials you used while working on this project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Input your license.',
        choices: ["GPL_3.0", "MIT", "BSD_3", "none"]
      },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub user profile link',
      },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address',
      },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) throw err
        console.log("File Written")
    })



}

// TODO: Create a function to initialize app
function init  () {
    inquirer.prompt(questions)
      .then((answers) => { 
          console.log(answers)
           writeToFile('README.md', generateMarkdown(answers))
      })
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();
