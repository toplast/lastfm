module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // ESlint rules
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "break",
          "case",
          "class",
          "directive",
          "do",
          "export",
          "for",
          "function",
          "if",
          "import",
          "multiline-const",
          "multiline-let",
          "singleline-const",
          "singleline-let",
          "switch",
          "throw",
          "try",
          "while"
        ],
        next: "*"
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["multiline-const", "multiline-let", "return"]
      },
      {
        blankLine: "any",
        prev: ["singleline-const", "singleline-let"],
        next: ["singleline-const", "singleline-let"]
      },
      {
        blankLine: "any",
        prev: "directive",
        next: "directive"
      },
      {
        blankLine: "any",
        prev: "import",
        next: "import"
      }
    ],
    "max-len": ["error", { code: 120, comments: 120, ignoreUrls: true }],
    "max-lines-per-function": ["error", { max: 30, skipBlankLines: true, skipComments: true }],
    "no-import-assign": "error",
    "no-duplicate-imports": "error",
    "no-useless-rename": "error",
    "sort-imports": "error",
    // Typescript ESlint rules
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": true }],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
