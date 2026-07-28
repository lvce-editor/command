# Command

Command module.

## Install

```sh
npm install @lvce-editor/command
```

## Usage

```js
import * as Command from '@lvce-editor/command'

const fn = () => {
  return 'abc'
}

Command.register('command-name', fn)

await Command.execute('command-name')
```