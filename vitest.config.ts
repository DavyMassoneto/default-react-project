import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    define: {
      'process.env': {},
    },
    plugins: [react()],
    test: {
      coverage: {
        provider: 'v8',
        exclude: ['setup-file.ts', '**/*.config.{js,ts}'],
        reporter: ['html', 'lcov', 'text'],
      },
      browser: {
        enabled: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
        headless: process.env.NODE_ENV === 'ci',
        screenshotFailures: false,
      },
    },
  }),
)
