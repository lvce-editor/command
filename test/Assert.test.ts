import { test, expect } from '@jest/globals'
import * as Assert from '../src/parts/Assert/Assert.js'

test('boolean', () => {
  const value = true
  Assert.boolean(value)
})

test('boolean - error', () => {
  const value = undefined
  expect(() => Assert.boolean(value)).toThrow(
    new Error(`expected value to be of type boolean`),
  )
})

test('function', () => {
  const value = () => {}
  Assert.fn(value)
})

test('function - error', () => {
  const value = 2
  expect(() => Assert.fn(value)).toThrow(
    new Error('expected value to be of type function'),
  )
})
