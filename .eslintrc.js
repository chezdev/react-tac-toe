module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};
