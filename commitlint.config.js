export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',     // новая фича
      'fix',      // баг фикс
      'chore',    // рутина, зависимости
      'docs',     // документация
      'style',    // форматирование
      'refactor', // рефакторинг
      'test',     // тесты
      'perf',     // оптимизация
      'ci',       // CI/CD
      'revert',   // откат
    ]],
    'subject-case':      [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
}