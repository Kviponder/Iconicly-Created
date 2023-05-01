const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

//Prompts questions to be asked to the user and exported to index.js
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your logo, enter up to three characters?",
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
    type: "input",
    name: "textcolor",
    message: "What color would you like your text to be?",
  },

  //The choice will be tied to the circle class, square class, triangle class, etc, and then input it using Jquery into the string literl creating the svg ie

  //
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your project logo.",
    choices: ["Circle", "Triangle", "Square"],
    default: "circle",
    name: "shape",
  },

  {
    type: "input",
    name: "color",
    message: "What color would you like your logo to be?",
  },
];
let shape;
let shapeText = "";

// function to initialize program
//Collaborated with classmates (Will and James) to get the switch statement to work
function init() {
  return inquirer.prompt(questions).then((answers) => {
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        shape.setColor(answers.color);
        shapeText = shape.render();
        break;
      case "Triangle":
        shape = new Triangle();
        shape.setColor(answers.color);
        shapeText = shape.render();
        break;
      case "Square":
        shape = new Square();
        shape.setColor(answers.color);
        shapeText = shape.render();
        break;
    }
    let svgCon = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeText}

<text x="150" y="170" font-size="50" text-anchor="middle" fill="${answers.textcolor}">${answers.title}</text>

</svg>`;

    return writeToFile("logo.svg", svgCon);
  });
}

//Sourced from readme generator
//Write the file to the logo.svg file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    // if there's an error, log it, otherwise log a success message
    err
      ? console.error(err)
      : console.log("You've successfully created a logo as an SVG file");
  });
}

// Function call to initialize app
init();
