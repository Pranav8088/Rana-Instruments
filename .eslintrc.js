module.exports = {
  extends: ['next/core-web-vitals'],
  // Add any custom ESLint rules here
  rules: {
    // Example custom rule:
    // 'react/no-unescaped-entities': 'off',
  },
  // Optional: If you're using TypeScript
  parserOptions: {
    project: './tsconfig.json',
  },
};
