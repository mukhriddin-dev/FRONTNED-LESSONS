import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath} from "node:url";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
            {
                find: "@components",
                replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
            },
            {
                find: "@layouts",
                replacement: fileURLToPath(new URL("./src/components/layouts", import.meta.url)),
            },
            {
                find: "@layout",
                replacement: fileURLToPath(new URL("./src/layouts", import.meta.url)),
            },
            {
                find: "@mocks",
                replacement: fileURLToPath(new URL("./src/mocks", import.meta.url)),
            },
            {
                find: "@pages",
                replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
            },
            {
                find: "@router",
                replacement: fileURLToPath(new URL("./src/router", import.meta.url)),
            },
            {
                find: "@service",
                replacement: fileURLToPath(new URL("./src/service", import.meta.url)),
            },
            {
                find: "@utils",
                replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
            },

            {
                find: "@reducer",
                replacement: fileURLToPath(new URL("./src/reducer", import.meta.url)),
            },
        
        ],
    },
});
