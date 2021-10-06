export class ErrorWithStatusCode extends Error {
  constructor(code: number, message: string) {
    super(message);
    this.name = code.toString();
  }
}
