// @ts-ignore due to isolatedModules flag - no import so this needed
describe('<App />', () => {
  beforeAll(async () => {
    await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' })
  }, JEST_TIMEOUT)

  it(
    'should include "COVID" text on page',
    async () => {
      await expect(page).toMatch('COVID')
    },
    JEST_TIMEOUT
  )
})
