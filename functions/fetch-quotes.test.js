const fetchQuotes = require('./fetch-quotes');

describe('quote-fetching function', () => {
  it('returns a quote from the Futurama API formatted as an object with name, text and image properties', async () => {
    const fetchedQuote = await fetchQuotes();

    const expectedQuote = {
      name: 'Bender',
      text: 'Bite my shiny metal ass.',
      image:
        'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
    };

    expect(fetchedQuote).toEqual(expectedQuote);
  });
});
