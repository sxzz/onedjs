import { createRuntime } from 'onedjs'
import * as fs from './fs'

export const nodeRuntime = createRuntime({
  runtimeName: 'node',
  isCurrent: () => typeof globalThis.process !== 'undefined',
  runOnly(name, fn) {
    if (name === this.runtimeName) {
      fn()
      return true
    }
    return false
  },
  fs,
})
