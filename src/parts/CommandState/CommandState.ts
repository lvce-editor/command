const commands = Object.create(null)

export const register = (commandMap: any) => {
  Object.assign(commands, commandMap)
}

export const getCommand = (key: string) => {
  return commands[key]
}
