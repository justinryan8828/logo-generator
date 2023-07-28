const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./svg");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What three characters do you want your logo to say?",
  },
  {
    type: "input",
    name: "textColors",
    message: "What do you want the text color to be?",
  },
  {
    type: "list",
    name: "type",
    message: "What shape do you want?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "color",
    message: "What color would you like your shape?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function start() {
  inquirer.prompt(questions).then((data) => {
    let svg = new SVG(data.text, data.textColors, data.type, data.color);
    writeToFile("./shape.svg", svg.render());
  });
}

// Function call to initialize app
module.exports = start;
