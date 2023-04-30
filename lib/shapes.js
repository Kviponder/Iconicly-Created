//use things learned this week to make a class for the shapes size, then i can make individual shape parameters, ie give all same height/ width, give all different dimensions ie circle gets radius, square gets height and width, triangle gets height and width, etc

class Shape {
   constructor() {
      this.color = ""
   }
   setColor(colorParam) {
      this.color = colorParam;
   }
}

const myShape =new Shape();
console.log(myShape)
myShape.setColor("red");
console.log(myShape)
//example of how to make the circle shape
// var circle = `<circle cx="150" cy="100" r="80" fill=" ${this.color}" />`;
// var square = `<rect x="0" y="0" width="160" height="160" fill=" ${this.color}" />`;
// var triangle = `<polygon x="0" y="0" points="225,10 100,210 350,210" fill=" ${this.color}" />`



class Circle extends Shape {
   render() {
      return `<circle cx="150" cy="100" r="80" fill=" ${this.color}" />`;
   }
}
class Square extends Shape {
   render() {
      return `<rect x="0" y="0" width="160" height="160" fill=" ${this.color}" />`;
   }

}

class Triangle extends Shape {
   render() {
      return `<polygon x="0" y="0" points="225,10 100,210 350,210" fill=" ${this.color}" />`;
   }

}

module.exports = {
   Circle,
   Square,
   Triangle,
 };

