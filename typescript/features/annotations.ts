let apples = 5;
let speed = "fast";
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// Build in Object
let now = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};

function logNumber2(i: number): number {
  return i;
}

let logNum2 = logNumber2(5);

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // any type
console.log(coordinates);
coordinates.x;

// 2) When we declare a variable on one line
let words = ["red", "green", "blue"];
let foundWorld: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWorld = true;
    console.log(foundWorld);
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    console.log(numberAboveZero);
  }
}

// More function fun (no type inference for arguments)
// There's type inference for return but still recommend annotating
const add2 = (a: number, b: number): number => {
  return a + b;
};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
};

// Only use when we don't return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with annotations
type forecast = {
  date: Date;
  weather: string;
};

const forecast: forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: forecast): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
