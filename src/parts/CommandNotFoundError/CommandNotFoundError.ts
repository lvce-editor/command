
export class CommandNotFoundError extends Error{
  constructor(command:string){
    super(`Command not found ${command}`)
    this.name='CommandNotFoundError'
  }

}
