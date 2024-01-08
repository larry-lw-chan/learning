const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  color: string;
  constructor() {
    this.color = "red";
  }
  getColor() {
    return this.color;
  }
}

const red = new Color().getColor();
