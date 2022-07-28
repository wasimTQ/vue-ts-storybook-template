import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: resolve(__dirname, 'src/frontend'),
    resolve: {
        alias: {
            '~': `${resolve(__dirname, 'src/frontend')}/`,
            '@': `${resolve(__dirname, 'src/frontend')}/`,
        }
    },
    build: {
        outDir: '../../dist',
        target: ['es2020'],
    },
    server: {
        fs: {
            allow: ['.'],
        },
        port: 3000,
    },
})
