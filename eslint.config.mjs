import { eslintConfig } from '@maxigarcia/eslint-config';

export default eslintConfig(
  {
    react: true,
    typescript: true,
    jsx: true,
  },
  {
    ignores: ['node_modules', '.expo'],
  },
);
