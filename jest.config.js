module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': ['babel-jest', { configFile: './.babelrc' }]
    },
    testMatch: ['**/__tests__/**/*.test.js'],
    verbose: true
}; 