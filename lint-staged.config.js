export default {
  // TypeScript & TSX
  '**/*.{ts,tsx}': [
    'eslint --max-warnings 0 --no-color --no-warn-ignored --fix',
    'prettier --write',
  ],
  // JSON, MD, YAML
  '**/*.{json,md,yml,yaml}': [
    'prettier --write',
  ],
  // CSS, SCSS
  '**/*.{css,scss}': [
    'prettier --write',
  ],
}