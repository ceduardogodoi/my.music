const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "eslint-config-turbo",
  ],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "unused-imports",
    "eslint-plugin-import-helpers",
    "no-relative-import-paths",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    // Enforces Prettier rules.
    "prettier/prettier": "error",

    // Enforces no unused imports.
    "unused-imports/no-unused-imports": "error",

    // Enforces no unused vars.
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-unresolved": "error",

    // Verifies that all named imports are part of the set of named exports in the referenced module.
    "import/named": "off",

    // Enforces having no duplicate imports in a file.
    "import/no-duplicates": "error",

    // Enforces empty line before return.
    "newline-before-return": "error",

    // Order imports.
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react$/", "/^react-dom$/"],
          ["/^next$/", "/^next//"],
          "module",
          ["/^@//"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],

    // Sort imports.
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],

    // Enforces no relative import paths, forcing to use alias import.
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: true, prefix: "@", rootDir: "src/" },
    ],

    // Prevents characters that you may have meant as JSX escape characters.
    "react/no-unescaped-entities": "warn",
    
    // Disable React prop types.
    "react/prop-types": "off",

    // Disable React import in scope.
    "react/react-in-jsx-scope": "off",

    // Disable React display name.
    "react/display-name": "off",

    // Force self-closing tags.
    "react/self-closing-comp": "error",

    // Force components as arrow functions.
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    // Enforces hooks rules.
    "react-hooks/rules-of-hooks": "error",

    // Enforces hooks exhaustive deps.
    "react-hooks/exhaustive-deps": "warn",

    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/prefer-stateless-function': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'ignore' },
    ],
    'react/no-access-state-in-setstate': 'error',
  },
};
