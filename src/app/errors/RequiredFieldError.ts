export class RequiredFieldError extends Error {
  constructor(field: string) {
    const message = `The field ${field} is required`;

    super(message);
    this.name = '400';
  }
}
