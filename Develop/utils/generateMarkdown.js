// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title

  Attach license badge here
  
  ## Description
  
  Enter project description here
  
  ## Table of Contents
  
  - [Intallation](#installation)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  
  Enter installation info here
  
  ## Usage
  
  Enter usage info here
  
  ## Contributing
  
  Enter contributing info here
  
  ## Testing
  
  Enter testing info here
  
  ## Questions
  
  Enter contact info here
`;
}

module.exports = generateMarkdown;
