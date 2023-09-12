import CustomError from './custom-error'

export class NotFoundError extends CustomError {
  status = 404;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeError() {
    return [{message: this.message}];
  }
}
