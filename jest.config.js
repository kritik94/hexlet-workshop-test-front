module.exports = {
    clearMocks: true,

    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],

    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',

    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
