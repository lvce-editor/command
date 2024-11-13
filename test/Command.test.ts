import { expect, test } from '@jest/globals'
import * as Command from '../src/parts/Command/Command.ts'
import * as CommandState from '../src/parts/CommandState/CommandState.ts'

test('execute - error - command not found', () => {
  expect(() => Command.execute('not-found')).toThrow(
    new Error(`command not found not-found`),
  )
})

test('execute', () => {
  const fn = () => {
    return 2
  }
  const commandMap = {
    fn,
  }
  CommandState.register(commandMap)
  expect(Command.execute('fn')).toBe(2)
})
