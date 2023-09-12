import CustomError from './custom-error'

export class NotFoundError extends CustomError {
  status = 404;

  constructor() {
    super("Resource not found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [{message: this.message}];
  }
}
