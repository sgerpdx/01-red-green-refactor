const fetchQuotes = require('./fetch-quotes');

describe('quote-fetching function', () => {
  it('returns a quote from the Futurama API formatted as an object with name, text and image properties', () => {
    const fetchedQuote = fetchQuotes();

    const expectedQuote = {
      name: 'Fry',
      text: 'wow man',
      image: 'URL',
    };

    expect(fetchedQuote).toEqual(expectedQuote);
  });
});
