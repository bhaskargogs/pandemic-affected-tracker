module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    SERVER_URL: `${REACT_APP_API_URL}`,
    JEST_TIMEOUT: 50000,
  },
  testRegex: './*\\.test\\.tsx$',
}
console.log(`RUNNING E2E INTEGRATION TESTS - MAKE SURE ${REACT_APP_API_URL} IS NOT IN USAGE`)
