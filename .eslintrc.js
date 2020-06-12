module.exports = {
  env: {
    "browser": false,
    "es6": true,
    "node": false,
    "jquery": false,
  },
  extends: [
  "eslint:recommended",
	"prettier",
	    "plugin:react/recommended",
	    "plugin:react-hooks/recommended",
	    "airbnb-base",
	    "airbnb/rules/react",
	    "prettier/react",
 ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  Plugins: ["react"],
  rules: {
    "sort-imports": "error",
    "one-var": ["error", { "var": "always", "let": "never", "const": "never" }],
    "no-const-assign": "error",
    "vars-on-top": "error",
    "func-style": ["error", "expression", {
      "allowArrowFunctions": true
  }],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "semi": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "no-var": 2,
    "eol-last": ["warn", "never"],
    // "indent": ["error", 1],
    "array-bracket-spacing": ["warn", "never"],
    "curly": ["warn", "multi-line"],
    "quotes": [2, "double", {
      "avoidEscape": true
  }],
    "no-undef": ["error"]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/webpack.base.conf.js"
      }
    }
  }
}