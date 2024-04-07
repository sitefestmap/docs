---
title: Vite Config
---

# Vite Config

**TODO** : remove html name extension. (This is handled automatically if using a JS Framework)

```js
// Config for Vite Vanilla JS Multi-page Apps
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        next: resolve(__dirname, 'index2.html'),
      },
    },
  },
})
```