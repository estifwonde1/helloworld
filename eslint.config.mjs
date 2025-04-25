import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginHtml from"eslint-plugin-html";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx,html}"], plugins: { js, html:pluginHtml }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx,html}"], languageOptions: { globals: {window:'readonly' , document:'readonly' , navigator:'readonly',console:'readonly'} } },
  pluginReact.configs.flat.recommended,
  {plugins:{html:pluginHtml}},
  {rules:{semi : ["error", "always"]}},
  {settings: { react: { version: "detect" } }},
]);
