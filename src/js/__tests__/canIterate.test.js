import canIterate from '../canIterate';

test.each([
  ['massive', [1, 2, 3], true],
  ['Map', new Map(), true],
  ['Set', new Set(), true],
  ['String', 'hello', true],
  ['null', null, false],
  ['number', 42, false],
  ['object', {}, false],
  ['true', true, false],
  ['false', false, false],
])(
  ('should check the %s'),
  (type, obj, expected) => {
    expect(canIterate(obj)).toBe(expected);
  },
);
