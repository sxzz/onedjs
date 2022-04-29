import path from 'path'
import { describe, expect, test } from 'vitest'
import onedjs from 'onedjs'
import * as nodeRuntime from '@onedjs/node'

describe('runtime on nodejs', () => {
  const api = onedjs.createOned([nodeRuntime.default.nodeRuntime])

  test('runtimeName should work', () => {
    expect(api.runtimeName).toBe('node')
  })

  describe('fs should work', () => {
    const tempDir = path.resolve(__dirname, '../_temp')
    const tempRead = path.resolve(tempDir, 'readtemp.txt')
    const tempWrite = path.resolve(tempDir, 'writetemp.txt')

    test('readFile should work', async () => {
      const data = await api.fs.readFile(tempRead, 'utf8')
      expect(data).toBe('Hello world，你好世界。\n')
    })

    test('writeFile should work', async () => {
      const timestamp = Date.now().toString()
      await api.fs.writeFile(tempWrite, timestamp, 'utf8')
      const data = await api.fs.readFile(tempWrite, 'utf8')
      expect(data).toBe(timestamp)
    })
  })
})
