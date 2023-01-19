import { defineConfig } from 'vite';


export default defineConfig({
    server: {
        port: 4000
    },
    preview: {
        port: 4000
    },
    build: {
        manifest: true
    },
});