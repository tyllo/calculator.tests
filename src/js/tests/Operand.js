// test class Operand

import Operand  from '../classes/Operand'
import Error    from '../exceptions/NumericError'

var assert = chai.assert
var expect = chai.expect

mocha.setup('bdd')

describe('Тест класса Operand на числа', () => {

  [-45, -23.234, 0, 1, 5, 324.234].forEach( (item) => {
    it('Проверка операнда ' + item, () =>
      assert.equal(new Operand(item), item)
    )
  })
})

describe('Тест класса Operand на исключения', () => {

  ['1a', '  ', null, undefined, NaN].forEach( (item) => {
    it('Проверка исключения для операнда ' + item + ': ' + typeof item, () =>
      expect( () => new Operand(item) ).to.throw(Error)
    )
  })
})