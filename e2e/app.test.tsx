// @ts-ignore due to isolatedModules flag - no import so this needed
describe('<App />', () => {
  beforeAll(async () => {
    await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' })
  }, JEST_TIMEOUT)

  it(
    'should include "COVID-19 Tracker application" text on page',
    async () => {
      await expect(page).toMatch('COVID-19 Tracker application')
    },
    JEST_TIMEOUT
  )
})
