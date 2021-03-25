const fetch = require('node-fetch');

const fetchQuotes = async () => {
  const res = await fetch(`http://futuramaapi.herokuapp.com/api/quotes/1`);
  const body = await res.json();
  const randomQuote = body[0];

  return {
    name: randomQuote.character,
    text: randomQuote.quote,
    image: randomQuote.image,
  };
};

module.exports = fetchQuotes;
