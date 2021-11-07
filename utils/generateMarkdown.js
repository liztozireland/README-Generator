// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "" 
  } else {
    return `## License
${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
#Description 
${data.description}
Our motivation to start this project: ${data.motivation}
We want to solve: ${data.problem}  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Test](#test)
* [Github](#github)
* [Questions](#questions)
#Installation
The following necessary dependencies need to be installed to properly run this application:
${data.installation}
##Instructions and Examples for Use:
${data.usage}
##Collaborators, Third-Party APIs, and Tutorials Used:
${data.credits}
##Liscense:
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
##Test Instructions:
${data.test}
##Github Link:
${data.github}
##If you have any questions, email me!
${data.questions}
`;
}

module.exports = generateMarkdown;
