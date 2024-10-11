export class commandionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'commandionError'
  }
}
