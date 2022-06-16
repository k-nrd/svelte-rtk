module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true
      }
    ],
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'svelte'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts']
}
