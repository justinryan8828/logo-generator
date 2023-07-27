const inquirer = require("inquirer");
const generateShapeJS = require("./lib/shape.js");
const fs = require("fs");

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
function init() {
  inquirer.prompt(questions).then((data) => {
    const shapeInfo = generateShapeJS(data);
    writeToFile("./lib/shape.js", shapeInfo);
  });
}

// Function call to initialize app
init();
