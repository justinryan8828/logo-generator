const { Circle, Square, Triangle } = require("./shape.js");

class SVG {
  constructor(text, textColors, type, color) {
    if (text.length > 3) {
      throw new Error("Text must be 3 characters or less fool!");
    }
    if (type === "Circle") {
      this.shape = new Circle(color);
    } else if (type === "Square") {
      this.shape = new Square(color);
    } else if (type === "Triangle") {
      this.shape = new Triangle(color);
    } else {
      throw new Error("Shape type is not valid fool!");
    }

    this.text = text;
    this.textColors = textColors;
  }

  render() {
    return `
    <svg version="1.1" width="300" height="200" xm1ns="http://www.w3.org/2000/svg">
    ${this.shape.createSVG()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      this.textColors
    }">${this.text}</text></svg>`;
  }
}

module.exports = SVG;
