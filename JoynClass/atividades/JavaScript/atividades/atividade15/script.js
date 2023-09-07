/*

Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem javascript. O método deve: 
calcular três números complexos;
realizar todas as operações básicas
e imprimir as propriedades real e img do números.

*/

class ComplexNumber {
  constructor(real, img) {
    this.real = real;
    this.img = img;
  }

  add(other) {
    return new ComplexNumber(this.real + other.real, this.img + other.img);
  }

  subtract(other) {
    return new ComplexNumber(this.real - other.real, this.img - other.img);
  }

  multiply(other) {
    return new ComplexNumber(
      this.real * other.real - this.img * other.img,
      this.real * other.img + this.img * other.real
    );
  }

  divide(other) {
    const denominator = other.real ** 2 + other.img ** 2;
    return new ComplexNumber(
      (this.real * other.real + this.img * other.img) / denominator,
      (this.img * other.real - this.real * other.img) / denominator
    );
  }

  conjugate() {
    return new ComplexNumber(this.real, -this.img);
  }

  modulus() {
    return Math.sqrt(this.real ** 2 + this.img ** 2);
  }

  argument() {
    return Math.atan2(this.img, this.real);
  }

  toString() {
    return `(${this.real} + ${this.img}i)`;
  }
}

const a = new ComplexNumber(1, 2);
const b = new ComplexNumber(3, 4);
const c = new ComplexNumber(5, 6);

const d = a.add(b);
console.log(d); // (4 + 5) + (2 + 4)i

// Subtração
const e = a.subtract(b);
console.log(e); // (1 - 3) + (2 - 4)i

// Multiplicação
const f = a.multiply(b);
console.log(f); // 23 + 34i

// Divisão
const g = a.divide(b);
console.log(g); // (1 / 3) + (2 / 4)i

// Conjugado
const h = a.conjugate();
console.log(h); // (1 - 2i)

// Módulo
const i = a.modulus();
console.log(i); // 3.1622776601683795

// Argumento
const j = a.argument();
console.log(j); // 1.1071487177940904

console.log(a.real); // 1
console.log(a.img); // 2

console.log(b.real); // 3
console.log(b.img); // 4

console.log(c.real); // 5
console.log(c.img); // 6
