const shapes = require("./lib/shapes");
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


const { Circle, Square, Triangle} = require("./lib/shapes");
const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

console.log(triangle.render());
console.log(circle.render());
console.log(square.render());


// myShape.setColor("red");
// console.log(myShape)

//Ideas for questionaire
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
  //The choice will be tied to the circle class, square class, triangle class, etc, and then input it using Jquery into the string literl creating the svg ie

  //
  {
    type: "list",
    name: "shape",
    message: "Please select a shape for your project logo.",
    choices: Object.keys(shapes),
  },
  {
    // work on this to enable a user to either choose a color or enter a hex code
    type: "input list",
    name: "color",
    message: "What color would you like your logo to be?",
    list: [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "black",
      "white",
      "I have a specific color in mind,(click to enter a hex code)",
    ],
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log(answers.title);
  console.log(answers.shape);
  console.log(answers.color);
  const logo = new shapes(answers.title, answers.shape, answers.color);
  console.log(logo);
  fs.writeFile("logo.svg", logo);
});


// return writeToFile(("logo.svg,", data));

//below was taken from readme-generator, can easily be modified to fit our needs

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    // if there's an error, log it, otherwise log a success message
    err
      ? console.error(err)
      : console.log("You've successfully created a logo as an SVG file");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdownContent = generateMarkdown(data);
      writeToFile(`${selectedLicense.badge}.svg)`, markdownContent);
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
