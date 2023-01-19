import { defineConfig } from 'vite';


export default defineConfig({
    preview: {
        port: 4001
    },
    server: {
        port: 4001
    },
    build: {
        manifest: true,  
    },
});