import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/react/views/MainPage/index.tsx',
        'resources/js/react/views/Admin/index.tsx'
      ],
      refresh: true,
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js/react')
    }
  }
});
