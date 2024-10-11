export const execute: (commandName: string, ...args: any[]) => Promise<any>

export const register: (
  commandName: string,
  fn: (...args: any[]) => any,
) => void
