import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins:[react(),{name:"mem-pages-paths",transform(code,id){return id.endsWith("style.css")?code.replace("url('/yggdrasil-gate.png')","url('./yggdrasil-gate.png')"):null}}],
  base:"./"
});
