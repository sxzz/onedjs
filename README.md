# onedjs [![npm](https://img.shields.io/npm/v/onedjs.svg)](https://npmjs.com/package/onedjs)

[![Unit Test](https://github.com/sxzz/onedjs/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/onedjs/actions/workflows/unit-test.yml)

A universal JavaScript API bridge for Node.js, Deno and browsers.

## Install

```bash
npm i onedjs
```

## Features

- File System
  - [x] read
  - [x] write
  - remove
  - rename
- OS
  - arch
  - platform
- Process
  - exit
  - pid
  - ppid
  - cwd
- Environment
  - get
  - set
  - delete

## Why is it called that?

```ts
const name = `${[...'node'].sort().reverse().join('')}js`
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2022 [三咲智子](https://github.com/sxzz)
