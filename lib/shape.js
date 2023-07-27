class Shape {
  constructor(text, textColor, color) {
    this.text = text;
    this.textColor = textColor;
    this.color = color;
  }
}

render(filler) {
    return `<${filler} fill="${this.color}" />`;
}

svg() {
    return `
    <svg version="1.1" width="300" height="200" xm1ns="http://www.w3.org/2000/svg">
    ${this.rendor()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
}

// File must have classes for circle, triangle and square

export class Circle extends Shape {
    rendor() {
        return super.rendor('circle cx="160" cy="110" r="90"');
    }
}

export class Square extends Shape {
    rendor() {
        return super.rendor('rect x="85" y="55" width="150" height="150"');
    }
}

export class Triangle extends Shape {
    rendor() {
        return super.rendor('polygon points="150, 20 250, 180 56, 180"');
    }
}
