const copyAndPush = require('./copy-and-push');

describe('copy and push function', () => {
  it('takes in an array and returns a copy with an additional item pushed into it', () => {
    const oldArray = [1, 2, 3];
    const newItem = 4;
    const newArray = copyAndPush(oldArray, newItem);

    const expectedArray = [1, 2, 3, 4];

    expect(newArray).toEqual(expectedArray);
  });

  it('takes in an array and returns a copy with an additional item pushed into it', () => {
    const oldArray = ['Jeff', 'Abed', 'Annie'];
    const newItem = 'Troy';
    const newArray = copyAndPush(oldArray, newItem);

    const expectedArray = ['Jeff', 'Abed', 'Annie', 'Troy'];

    expect(newArray).toEqual(expectedArray);
  });

  it('takes in an array and returns a copy with an additional item pushed into it', () => {
    const oldArray = [12, 11, 25];
    const controlArray = oldArray;
    const newItem = 37;
    const newArray = copyAndPush(oldArray, newItem);
    const expectedArray = [12, 11, 25, 37];

    expect(newArray).toEqual(expectedArray);
    expect(oldArray).toEqual(controlArray);
  });
});
