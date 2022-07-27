// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let table = ``;
  Object.entries(data).forEach((x) => {
    if (x != "confirm") table += ` - [${x[0]}](#${x[0]}) \n`;
  });
  return `
# Project README.md file generator  

## Table of content
${table}
<a name="username"></a>
## User name
${data.username}
<a name="email"></a>
## User email
${data.email}
<a name="title"></a>
## Project Name
${data.title}
<a name="description"></a>
## Description of the project
${data.description}
<a name="licence"></a>
## Type of licence required for the running the project
${data.license}
<a name="installation"></a>
## To Install the application on your device, please run the below command
${data.installation}
<a name="tests"></a>
## To run testing on the applicaiton please run the below command 
${data.tests}
<a name="information"></a>
## Points to note before using the application 
${data.information}
<a name="contributors"></a>
  ## Important information that users need to be aware off before contributing to code 
${data.contributors}
  ## For any questions or suggestions, please contact  ${data.username}    @    ${data.email}`;
}
module.exports = generateMarkdown;
