import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig, loadEnv } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";

const config = ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const FullSPA = env.VITE_FULL_SPA === "true";

  return defineConfig({
    server: {
      port: 3000,
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tanstackStart(
        FullSPA
          ? {
              spa: {
                enabled: true,
              },
            }
          : {}
      ),
      viteReact(),
    ],
  });
};
export default config;
