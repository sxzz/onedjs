import path from 'path'
import { describe, expect, test } from 'vitest'
import { createOned } from 'onedjs'
import { nodeRuntime } from '@onedjs/node'

describe('runtime on nodejs', () => {
  const api = createOned([nodeRuntime])

  test('runtimeName should work', () => {
    expect(api.runtimeName).toBe('node')
  })

  describe('fs should work', () => {
    const tempDir = path.resolve(__dirname, '../_temp')
    const tempWrite = path.resolve(tempDir, 'writetemp.txt')

    describe('readFile should work', () => {
      test('utf8 should work', async () => {
        const tempRead = path.resolve(tempDir, 'read-utf8.txt')
        const data = await api.fs.readFile(tempRead, 'utf8')
        expect(data).toMatchInlineSnapshot(`"Hello world，你好世界。\n"`)
      })

      test('gbk should work', async () => {
        const tempRead = path.resolve(tempDir, 'read-gbk.txt')
        const data = await api.fs.readFile(tempRead, 'gbk')
        expect(data).toMatchInlineSnapshot(`"hello, 你好\n"`)
      })
    })

    test('writeFile should work', async () => {
      const timestamp = Date.now().toString()
      await api.fs.writeFile(tempWrite, timestamp)
      const data = await api.fs.readFile(tempWrite, 'utf8')
      expect(data).toBe(timestamp)
    })
  })
})
