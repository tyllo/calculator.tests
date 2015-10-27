/**
 * Класс содержит в себе число, тестирует его,
 * выдавая исключение NumericError
*/

import NumericError from '../exceptions/NumericError'

class Operand {

  constructor(n) {
    if ( !this.isNumeric(n) ) {
      throw new NumericError(n)
    }
    this._operand = n
  }

  // проверка на число
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  // при операциях вычислния вернем число
  valueOf() {
    return +this._operand
  }
}

export default Operand
