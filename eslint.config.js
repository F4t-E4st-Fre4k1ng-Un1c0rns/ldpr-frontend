import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  reactCompiler.configs.recommended,

  eslintPluginPrettierRecommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "dot-notation": "warn",
      eqeqeq: "warn",
      "id-length": "warn",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-sort-props": "warn",
      "react/prefer-read-only-props": "warn",
      "require-unicode-regexp": "error",
      "sort-imports": "error",
      "sort-keys": "error",
    },
    settings: {
      react: {
        version: "19",
      },
    },
  },
];
