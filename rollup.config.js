import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';



const tailwindConfig = require('./tailwind.config.js');

export default defineConfig({
  input: "src/DarkModePlugin.tsx",
  output: {
    dir: "dist",
    format: "esm",
    name: "reactdarkmodecomponent",
  },
  external: ["react", "react-dom","@emotion/react","@emotion/styled","@mui/icons-material","@mui/material","react-icons","react-icons/io5","@tailwind base"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }), postcss({
    config: {
      path: "./postcss.config.js",
    },
    extensions: [".css"],
    minimize: true,
    inject: {
      insertAt: "top",
    },
  }),],
});