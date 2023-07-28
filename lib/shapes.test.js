const { Circle, Square, Triangle } = require("./shape.js");

describe("Shapes", () => {
  describe("Circle", () => {
    test("should create a circle with a choice color", () => {
      const expectedCircle = `<circle cx="150" cy="100" r="80" fill="green" />`;
      const newCircle = new Circle("green");
      const actualCircle = newCircle.createSVG();
      expect(actualCircle).toEqual(expectedCircle);
    });
  });

  describe("Triangle", () => {
    test("should create a triangle with a choice color", () => {
      const expectedTriangle = `<polygon points="150,25 63.4,175 236.6,175" fill="green" />`;
      const newTriangle = new Triangle("green");
      const actualTriangle = newTriangle.createSVG();
      expect(actualTriangle).toEqual(expectedTriangle);
    });
  });

  describe("Square", () => {
    test("should create a square with a choice color", () => {
      const expectedSquare = `<rect x="75" y="25" width="150" height="150"  fill="green" />`;
      const newSquare = new Square("green");
      const actualSquare = newSquare.createSVG();
      expect(actualSquare).toEqual(expectedSquare);
    });
  });
});
