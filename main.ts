//4.1
class Person {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  toString(): string {
    return `Person[name=${this.name}, address=${this.address}]`;
  }
}

class Student extends Person {
  private program: string;
  private year: number;
  private fee: number;

  constructor(name: string, address: string, program: string, year: number, fee: number) {
    super(name, address);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getProgram(): string {
    return this.program;
  }

  setProgram(program: string): void {
    this.program = program;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number): void {
    this.year = year;
  }

  getFee(): number {
    return this.fee;
  }

  setFee(fee: number): void {
    this.fee = fee;
  }

  toString(): string {
    return `Student[${super.toString()}, program=${this.program}, year=${this.year}, fee=${this.fee}]`;
  }
}

class Staff extends Person {
  private school: string;
  private pay: number;

  constructor(name: string, address: string, school: string, pay: number) {
    super(name, address);
    this.school = school;
    this.pay = pay;
  }

  getSchool(): string {
    return this.school;
  }

  setSchool(school: string): void {
    this.school = school;
  }

  getPay(): number {
    return this.pay;
  }

  setPay(pay: number): void {
    this.pay = pay;
  }

  toString(): string {
    return `Staff[${super.toString()}, school=${this.school}, pay=${this.pay}]`;
  }
}



 //6.1

abstract class Shape {
  color: string;
  filled: boolean;

  constructor(color: string = "red", filled: boolean = true) {
    this.color = color;
    this.filled = filled;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  setFilled(filled: boolean): void {
    this.filled = filled;
  }

  abstract getArea(): number;

  abstract getPerimeter(): number;

  toString(): string {
    return `Shape[color=${this.color}, filled=${this.filled}]`;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number = 1.0, color: string = "red", filled: boolean = true) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  toString(): string {
    return `Circle[radius=${this.radius}, ${super.toString()}]`;
  }
}

class Rectangle extends Shape {
  width: number;
  length: number;

  constructor(width: number = 1.0, length: number = 1.0, color: string = "red", filled: boolean = true) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth(): number {
    return this.width;
  }

  getLength(): number {
    return this.length;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  setLength(length: number): void {
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.length);
  }

  toString(): string {
    return `Rectangle[width=${this.width}, length=${this.length}, ${super.toString()}]`;
  }
}

class Square extends Rectangle {
  constructor(side: number = 1.0, color: string = "red", filled: boolean = true) {
    super(side, side, color, filled);
  }

  getSide(): number {
    return this.width; // or this.length, since they are equal in a square
  }

  setSide(side: number): void {
    this.width = side;
    this.length = side;
  }

  setWidth(side: number): void {
    this.setSide(side);
  }

  setLength(side: number): void {
    this.setSide(side);
  }

  toString(): string {
    return `Square[side=${this.width}, ${super.toString()}]`;
  }
}


// //6.2

interface GeometricObject {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements GeometricObject {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  toString(): string {
    return `Circle with radius:  ${ this.radius}`;
  }
}

class Rectangle implements GeometricObject {
  private width: number;
  private length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.length);
  }

  toString(): string {
    return "Rectangle with width: " + this.width + " and length: " + this.length;
  }
}

const circle = new Circle(5.0);
console.log("Circle area:", circle.getArea());
console.log("Circle perimeter:", circle.getPerimeter());
console.log("Circle:", circle.toString());

const rectangle = new Rectangle(4.0, 6.0);
console.log("Rectangle area:", rectangle.getArea());
console.log("Rectangle perimeter:", rectangle.getPerimeter());
console.log("Rectangle:", rectangle.toString());


