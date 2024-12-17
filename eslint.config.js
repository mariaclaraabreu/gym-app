import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            perfectionist,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'comma-spacing': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'no-unused-expressions': [
                'warn',
                {
                    allowShortCircuit: true,
                },
            ],
            'perfectionist/sort-imports': [
                'warn',
                {
                    type: 'alphabetical',
                    order: 'asc',
                    ignoreCase: true,
                    specialCharacters: 'keep',
                    internalPattern: ['^~/.+'],
                    partitionByComment: false,
                    partitionByNewLine: false,
                    newlinesBetween: 'always',
                    maxLineLength: undefined,
                    groups: [
                        'type',
                        'react',
                        'antd',
                        ['builtin', 'external'],
                        'internal-type',
                        'internal',
                        ['parent-type', 'sibling-type', 'index-type'],
                        ['parent', 'sibling', 'index'],
                        'style',
                        'object',
                        'unknown',
                    ],
                    customGroups: { 
                        value: {
                            react: ['react', 'react-*'],
                            antd: ['antd', 'antd\*', '@antd\*'],
                        },
                        type: {
                            react: 'react',
                        }, 
                    },
                    environment: 'node',
                },
            ],
            "comma-dangle": ["warn", "always-multiline"],
            'eol-last': ['error', 'always'],
            'linebreak-style': ['error', 'unix'],
            'arrow-parens': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'yoda': ['error', 'always'],
            'eol-last': ['error','always'],
            'indent': [
                'error',
                4,
                { SwitchCase: 1 },
            ],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'arrow-parens': ['error','always'],
            'object-curly-spacing': ['error','always'],
            'arrow-spacing': 'warn',
            'block-spacing': 'warn',
            'function-call-argument-newline': ['warn', 'consistent'],
            'func-call-spacing': 'warn',
            'max-statements-per-line': 'warn',
            'newline-per-chained-call': 'warn',
            'no-multi-spaces': 'warn',
            'template-curly-spacing': ['warn', 'never'],
            'no-whitespace-before-property': 'warn',
            'no-trailing-spaces': 'warn',
            'no-multiple-empty-lines': [
                'warn',
                { max: 1, maxBOF: 0 },
            ],
            'template-tag-spacing': 'warn',
            'prefer-arrow-callback': [
                'warn',
                { allowNamedFunctions: true },
            ],
            'prefer-exponentiation-operator': 'warn',
            'prefer-promise-reject-errors': [
                'warn',
                { allowEmptyReject: true },
            ],
            'prefer-rest-params': 'warn',
            'prefer-spread': 'warn',
            'quote-props': [
                'warn',
                'consistent-as-needed',
            ],
            'require-await': 'warn',
            'require-yield': 'warn',
            'comma-spacing': 'warn',
            'computed-property-spacing': 'warn',
            'dot-location': [
                'warn',
                'property',
            ],
            'function-paren-newline': [
                'warn',
                'multiline-arguments',
            ],
            'generator-star-spacing': [
                'warn',
                { before: false, after: true },
            ],
            'implicit-arrow-linebreak': 'warn',
            'key-spacing': 'warn',
            'keyword-spacing': 'warn',
            'lines-between-class-members': [
                'warn',
                'always',
                { exceptAfterSingleLine: true },
            ],
            'padded-blocks': [
                'warn',
                'never',
            ],
            'no-unused-expressions': [
                'warn',
                {
                    allowShortCircuit: true,
                },
            ],
        },
    },
)
