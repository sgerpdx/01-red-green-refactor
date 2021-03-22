const copyAndPush = require('./copy-and-push');

describe('copy and push function', () => {
  it('takes in an array and returns a copy with an additional item pushed into it', () => {
    const oldArray = [1, 2, 3];
    const newItem = 4;
    const newArray = copyAndPush(oldArray, newItem);

    const expectedArray = [1, 2, 3, 4];

    expect(newArray).toEqual(expectedArray);
  });

  //   it('takes in an array and returns a copy with an additional item pushed into it', () => {});
});