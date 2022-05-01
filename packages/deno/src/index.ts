// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="deno-shim.d.ts" />

import { createRuntime } from '@onedjs/core'
import * as fs from './fs'
import type { FileSystem } from '@onedjs/core'

export const denoRuntime = createRuntime({
  runtimeName: 'deno',
  isCurrent: () => typeof Deno !== 'undefined',
  runOnly(name, fn) {
    if (name === this.runtimeName) {
      fn()
      return true
    }
    return false
  },
  fs: fs as FileSystem,
})
