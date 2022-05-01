export interface FileSystem {
  readFile(path: string | URL, encoding: string): Promise<string>
  readFile(path: string | URL, encoding?: undefined): Promise<Uint8Array>

  writeFile(path: string | URL, data: string | Uint8Array): Promise<void>
}

export interface Runtime<Name extends string = string> {
  isCurrent(): boolean
  runtimeName: Name
  runOnly: (name: Name, fn: (...args: unknown[]) => unknown) => boolean

  fs: FileSystem
}
