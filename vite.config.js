import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'MyBundle',
      fileName: () => 'bundle.js',
      formats: ['iife'], // Samler til én fil der virker i browseren
    }
  }
});