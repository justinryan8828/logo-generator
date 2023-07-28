class Shape {
  constructor(color) {
    this.color = color;
  }

  createSVG() {
    throw new Error("Override!");
  }
}

class Circle extends Shape {
  createSVG() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  createSVG() {
    return `<rect x="75" y="25" width="150" height="150"  fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  createSVG() {
    return `<polygon points="150,25 63.4,175 236.6,175" fill="${this.color}" />`;
  }
}

// File must have classes for circle, triangle and square
module.exports = { Shape, Circle, Square, Triangle };
