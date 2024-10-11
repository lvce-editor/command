import { test, expect } from '@jest/globals'
import * as command from '../src/parts/command/command.js'

test('boolean', () => {
  const value = true
  command.boolean(value)
})

test('boolean - error', () => {
  const value = undefined
  expect(() => command.boolean(value)).toThrow(
    new Error(`expected value to be of type boolean`),
  )
})

test('function', () => {
  const value = () => {}
  command.fn(value)
})

test('function - error', () => {
  const value = 2
  expect(() => command.fn(value)).toThrow(
    new Error('expected value to be of type function'),
  )
})
