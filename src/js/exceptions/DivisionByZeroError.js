// Exception - делеие на ноль

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.message = 'Division by zero not allow';
    this.name = 'divisionByZero';
  }
}

export default DivisionByZeroError
