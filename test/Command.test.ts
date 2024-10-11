import { expect, test } from '@jest/globals'
import * as Command from '../src/parts/Command/Command.ts'

test('execute', () => {
  expect(typeof Command.execute).toBe('function')
})
