// this config was stolen from: https://github.com/sindresorhus/query-string/issues/366 without any thought
const esModules = [
    'query-string',
    'decode-uri-component',
    'split-on-first',
    'filter-obj',
];

module.exports = {
    transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : [],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
    // transform: {},
    // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
    "moduleNameMapper":{
    '^.+\\.(css|less)$': '<rootDir>/tests/CSSStub.js'
} } 