const importFs = async () => {
  try {
    // waiting esbuild PR #2067
    return await eval('import("fs/promises")')
  } catch {}

  // Vitest
  return import('fs/promises')
}

export function readFile(path: string | URL, encoding: string): Promise<string>
export function readFile(
  path: string | URL,
  encoding?: undefined
): Promise<Uint8Array>
export async function readFile(
  path: string | URL,
  encoding?: string | undefined
): Promise<string | Uint8Array> {
  const fs = await importFs()
  const data = await fs.readFile(path)
  if (!encoding) {
    return new Uint8Array(data.buffer)
  }
  const decoder = new TextDecoder(encoding)
  return decoder.decode(data)
}

export async function writeFile(
  path: string | URL,
  data: string | Uint8Array
): Promise<void> {
  const fs = await importFs()
  let binary: Uint8Array | Buffer
  if (typeof data === 'string') {
    const encoder = new TextEncoder()
    binary = encoder.encode(data)
  } else {
    binary = data
  }
  await fs.writeFile(path, binary)
}
