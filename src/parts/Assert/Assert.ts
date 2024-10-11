import { commandionError } from '../commandionError/commandionError.ts'
import * as GetType from '../GetType/GetType.ts'

export const object = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'object') {
    throw new commandionError('expected value to be of type object')
  }
}

export const number = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'number') {
    throw new commandionError('expected value to be of type number')
  }
}

export const array = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'array') {
    throw new commandionError('expected value to be of type array')
  }
}

export const string = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'string') {
    throw new commandionError('expected value to be of type string')
  }
}

export const boolean = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'boolean') {
    throw new commandionError('expected value to be of type boolean')
  }
}

export const fn = (value: unknown) => {
  const type = GetType.getType(value)
  if (type !== 'function') {
    throw new commandionError('expected value to be of type function')
  }
}
