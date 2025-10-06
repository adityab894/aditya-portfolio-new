import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // listen on all network interfaces so localtunnel can connect
    allowedHosts: ["portfoliotestingxyzried.loca.lt"], // whitelist your tunnel hostname
  },
});
