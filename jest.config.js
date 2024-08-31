module.exports = {
    testEnvironment: 'jsdom',

    moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js'],

    moduleNameMapper: {
        '^src(.*)$': '<rootDir>/src$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMocks.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },

    setupFiles: ['<rootDir>/jestSetupFile.js'],

    maxWorkers: '50%',

    transformIgnorePatterns: ['<rootDir>/node_modules/(?!query-string)'],

    transform: {
        //"^.+\\.[t|j]sx?$": "babel-jest",
        '^.+\\.(js|jsx)$': 'babel-jest',
        '\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },

    modulePaths: ['src'],

    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',

    testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$', '\\.sass$', '\\.css$'],

    cacheDirectory: '.jest/cache',
};