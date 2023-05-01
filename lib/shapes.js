//use things learned this week to make a class for the shapes size, then i can make individual shape parameters, ie give all same height/ width, give all different dimensions ie circle gets radius, square gets height and width, triangle gets height and width, etc
class Shape {
  constructor(color) {
    this.color = color;
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="68" y="50" width="160" height="160" fill="${this.color}"/>`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="135" r="60" fill="${this.color}"/>`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
