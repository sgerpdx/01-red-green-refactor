const getName = require('./get-name');

describe('name-obtaining function', () => {
  it('takes an object and returns the value of the name property', () => {
    const character = {
      alias: 'Starbuck',
      name: 'Kara',
      age: 25,
    };

    const targetName = getName(character);

    expect(targetName).toEqual('Kara');
  });

  it('takes an object and returns the value of the name property', () => {
    const character = {
      name: 'Apollo',
      id: '45fg225',
    };

    const targetName = getName(character);

    expect(targetName).toEqual('Apollo');
  });
});
