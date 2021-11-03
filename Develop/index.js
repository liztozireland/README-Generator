// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
        name: 'Usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List any collaborators, third-party APIs, or tutorials you used while working on this project',
      },
      {
        type: 'input',
        name: 'License',
        message: 'Input your license.',
      },
    {
      type: 'input',
      name: 'Test',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init  () {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app
init();
