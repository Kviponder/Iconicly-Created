const inquirer = require("inquirer");
const fs = require("fs");


console.log("hello");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    validate: (value) => {
      if (value.trim().length > 0 && value.trim().length <= 3) {
        // if the user doesn't enter a title, the prompt will repeat
        return true;
      } else {
        return "Please enter a title betwen 1 and 3 characters.";
      }
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your project logo.",
    choices: ["square", "circle", "triangle"], //maybe add "diamond"
  },
    {  // work on this to enable a user to either choose a color or enter a hex code
        type: "input list",
        name: "color",
        message: "What color would you like your logo to be?",
        list: ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", 
        "I have a specific color in mind,(click to enter a hex code)"]
    }
];

//below was taken from readme-generator, can easily be modified to fit our needs

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      // if there's an error, log it, otherwise log a success message
  
      err
        ? console.error(err)
        : console.log("You've successfully created a logo as an SVG file");
    });
  }
  

  function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const markdownContent = generateMarkdown(data);
        writeToFile( `${selectedLicense.badge}.svg)`, markdownContent);
      })
      .catch((err) => console.log(err));
  }
  
  // Function call to initialize app
  init();
  