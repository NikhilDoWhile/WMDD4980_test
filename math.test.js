const { division } = require('./division');

test('20/2=10', () => {
    expect(division(20,2)).toBe(10);
});
test.skip('40/4=10', () => {
    expect(division(40, 4)).toBe(10);
});

