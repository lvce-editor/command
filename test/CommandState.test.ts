import { expect, test } from '@jest/globals'
import * as CommandState from '../src/parts/CommandState/CommandState.ts'

test('register and getCommand', () => {
  const fn = () => {}
  const commandMap = { fn }
  CommandState.register(commandMap)
  expect(CommandState.getCommand('fn')).toBe(fn)
})
