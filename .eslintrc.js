module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3',
    'simple-import-sort'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    curly: 'error',
    'simple-import-sort/imports': 'error'
  },
  settings: {
    // ...
  }
};
