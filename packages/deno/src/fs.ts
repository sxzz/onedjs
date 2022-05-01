export function readFile(path: string | URL, encoding: string): Promise<string>
export function readFile(
  path: string | URL,
  encoding?: undefined
): Promise<Uint8Array>
export async function readFile(
  path: string | URL,
  encoding?: string | undefined
): Promise<string | Uint8Array> {
  const data = await Deno.readFile(path)
  if (!encoding) return data

  const decoder = new TextDecoder(encoding)
  return decoder.decode(data)
}

export async function writeFile(
  path: string | URL,
  data: string | Uint8Array
): Promise<void> {
  if (typeof data === 'string') {
    await Deno.writeTextFile(path, data)
  } else {
    await Deno.writeFile(path, data)
  }
}
