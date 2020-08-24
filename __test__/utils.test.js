const {serialize} = require('../src/utils/index')

test('Serialize Object Query to String', () => {
    expect(serialize({title: 'Aladdin'})).toBe('title=Aladdin');
});

test('Serialize Mutiple Object Query to String', () => {
    expect(serialize({title: 'Aladdin', limit: "64"})).toBe('title=Aladdin&limit=64');
});