const fetchQuotes = require('./fetch-quotes');

describe('quote-fetching function', () => {
  it('returns a quote from the Futurama API formatted as an object with name, text and image properties', async () => {
    const fetchedQuote = await fetchQuotes();

    expect(fetchedQuote).toEqual(expect.any(Object));

    expect(fetchedQuote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
