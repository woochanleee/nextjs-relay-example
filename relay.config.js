module.exports = {
  language: 'typescript',
  extensions: ['ts', 'tsx'],
  src: './',
  schema: './graphql/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  artifactDirectory: './__generated__',
};
