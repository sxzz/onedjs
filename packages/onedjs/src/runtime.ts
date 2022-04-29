import type { Runtime } from './api'

export function createRuntime<T extends string = string>(runtime: Runtime<T>) {
  return runtime
}

export function createOned<R extends Runtime = Runtime>(runtimes: R[]) {
  for (const runtime of runtimes) {
    if (runtime.isCurrent()) return runtime
  }

  throw new Error('No runtime found')

  // if (typeof globalThis.Deno !== 'undefined') {
  //   return 'deno'
  // } else if (typeof globalThis.process !== 'undefined') {
  //   return 'node'
  // } else if (typeof globalThis.window !== 'undefined') {
  //   return 'browser'
  // }
}
