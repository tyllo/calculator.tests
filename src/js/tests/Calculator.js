// tests for class Calculator

import Calculator from '../classes/Calculator'
import Error      from '../exceptions/DivisionByZeroError'

var assert = chai.assert
var expect = chai.expect

mocha.setup('bdd')

var calc = new Calculator

describe('Тест класса Calculator на сложение', () => {

  var tests = [
    {a: 0, b: 0},
    {a: -1, b: 1},
    {a: 0.1, b: 0.2},
    {a: -100.234423, b: 12443},
  ]

  tests.forEach( (item) => {
    var result = +(item.a + item.b).toFixed(10)
    it('Проверка: ' + item.a + ' - ' + item.b + ' = ' + result, () =>
      assert.equal(calc.add(item.a, item.b), result)
    )
  })
})

describe('Тест класса Calculator на вычитание', () => {

  var tests = [
    {a: 0, b: 0},
    {a: -1, b: 1},
    {a: 0.1, b: 0.2},
    {a: -100.234423, b: 12443},
  ]

  tests.forEach( (item) => {
    var result = +(item.a - item.b).toFixed(10)
    it('Проверка: ' + item.a + ' + ' + item.b + ' = ' + result, () =>
      assert.equal(calc.sub(item.a, item.b), result)
    )
  })
})

describe('Тест класса Calculator на умножение', () => {

  var tests = [
    {a: 0, b: 0},
    {a: -1, b: 1},
    {a: 0.1, b: 0.2},
    {a: -100.234423, b: 12443},
  ]

  tests.forEach( (item) => {
    var result = +(item.a * item.b).toFixed(10)
    it('Проверка: ' + item.a + ' * ' + item.b + ' = ' + result, () =>
      assert.equal(calc.mult(item.a, item.b), result)
    )
  })
})

describe('Тест класса Calculator на деление', () => {

  var tests = [
    {a: 0, b: 0.000001},
    {a: -1, b: 1},
    {a: 0.1, b: 0.2},
    {a: -100.234423, b: 12443},
  ]

  tests.forEach( (item) => {
    var result = +(item.a / item.b).toFixed(10)
    it('Проверка: ' + item.a + ' / ' + item.b + ' = ' + result, () =>
      assert.equal(calc.div(item.a, item.b), result)
    )
  })
})

describe('Тест класса Calculator на возведение в степень', () => {

  var tests = [
    {a: 0, b: 0.000001},
    {a: -1, b: 1},
    {a: 0.1, b: 0.2},
    {a: -5, b: 4},
    {a: 5, b: 0.4},
  ]

  tests.forEach( (item) => {
    var result = Math.pow(item.a, item.b)
    it('Проверка: ' + item.a + ' ^ ' + item.b + ' = ' + result, () =>
      assert.equal(calc.pow(item.a, item.b), result)
    )
  })
})

