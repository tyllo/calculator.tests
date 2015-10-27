// Exception - numeric не число

class NumericError extends Error {
  constructor(message) {
    super(message);
    this.message = 'Operand: [' + message + '] is not numeric';
    this.name = 'NumericError';
  }
}

export default NumericError