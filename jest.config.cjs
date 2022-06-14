module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true
      }
    ],
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'svelte'
  ],
  setupFilesAfterEnv: ['./jest.setup.ts']
}
