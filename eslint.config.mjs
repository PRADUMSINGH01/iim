import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname, // Base directory for resolving relative paths
});

// Define ESLint configuration
export default [
  ...compat.extends("next/core-web-vitals"), // Add Next.js ESLint rules
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Specify file patterns
    languageOptions: {
      ecmaVersion: "latest", // Support the latest ECMAScript version
      sourceType: "module", // Use ES Modules
    },
    rules: {
      // Add custom rules or overrides here
      "no-console": "warn", // Example: Warn about console.log usage
    },
  },
];
