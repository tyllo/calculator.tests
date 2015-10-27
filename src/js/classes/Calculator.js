// класс калькулятор

import Operand             from './Operand'
import DivisionByZeroError from '../exceptions/DivisionByZeroError'

class Calculator {

  constructor(name = 'default') {
    this.name = name
  }

  // сложение
  add(a, b) {
    var A = new Operand(a)
    var B = new Operand(b)
    return +(A + B).toFixed(10)
  }
  // вычитание
  sub(a, b) {
    var A = new Operand(a)
    var B = new Operand(b)
    return +(A - B).toFixed(10)
  }
  // умножение
  mult(a, b) {
    var A = new Operand(a)
    var B = new Operand(b)
    return +(A * B).toFixed(10)
  }
  // деление
  div(a, b) {
    var A = new Operand(a)
    var B = new Operand(b)
    if ( B == 0 ) throw new DivisionByZeroError(B)
    return +(A / B).toFixed(10)
  }
  // возведение в степень
  pow(a, exp) {
    var A = new Operand(a)
    var B = new Operand(exp)
    return Math.pow(A, B)
  }
}

export default Calculator