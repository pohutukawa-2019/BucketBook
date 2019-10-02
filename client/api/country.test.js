import { fetchCountryByName } from './country'

jest.mock('./requestor', () => {
  // requestor exports a function, so we must do so here too
  return (endpoint, method, payload) => {
    return Promise.resolve({
      body: [
        { id: 1, name: 'Zimbabwe' },
        { id: 2, name: 'Zambia' }
      ]
    })
  }
})

describe('API client for country by name', () => {
  it('fetchCountryByName returns a country by its name', () => {
    return fetchCountryByName('Zambia')
      .then(countries => {
        expect(countries[1].name).toBe('Zambia')
    })
  })

  it.skip('fetchCategories returns an error when expected', () => {
    expect.assertions(1)
    return fetchCountryByName('Zambia').catch(e => {
      expect(e.message).toBe('Error accessing categories api.')
    })
  })
})