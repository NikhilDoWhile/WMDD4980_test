const division = (a,b) => a / b;

module.exports = {division}

const { division } = require('./divide')

test('10 / 2 = 5', () => {
    expect(division(10,2)).toBe(5)
});
