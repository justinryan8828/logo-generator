const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "characters",
    message: "What three characters do you want your logo to say?",
  },
];

function svgObject(name, textColor, shape, shapeColor) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Create a new object using the 'BlogPost' constructor
const post = new BlogPost(
  "John Doe",
  "My First Post",
  "Dogs are super cute!",
  "12/15/2021"
);

// TODO: Call the 'printMetaData()' method on the new object
post.printMetaData();
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readMeInfo = generateMarkdown(data);
    writeToFile("./output/README.md", readMeInfo);
  });
}

// Function call to initialize app
init();

console.log();
