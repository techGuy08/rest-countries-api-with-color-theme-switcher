import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            { legacy: true },
          ],
        ],
      },
    }),
  ],
   server: {
    port: 3000,
    // strictPort: true, // Uncomment this line if you want Vite to fail if port 3000 is already in use
  }
});
