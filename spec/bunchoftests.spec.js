const funcTask1 = require('../tasks/1.js');
const funcTask2 = require('../tasks/2.js');
const funcTask3 = require('../tasks/3.js');
const funcTask4 = require('../tasks/4.js');

describe('From codewars', () => {
  test('Sum of positive', () => {
    expect(funcTask1([-1, 3, 5, 0, -2, -10])).toBe(8);
    expect(funcTask1([])).toBe(0);
    expect(funcTask1([-6, 7, 7, 8, 8])).toBe(30);
    expect(funcTask1([-7, -9])).toBe(0);
    expect(funcTask1([1, 2, 3, 4, 5])).toBe(15);
  });

  test('Opposite number', () => {
    expect(funcTask2(1)).toBe(-1);
    expect(funcTask2(12)).toBe(-12);
    expect(funcTask2(5)).toBe(-5);
    expect(funcTask2(189893048324)).toBe(-189893048324);
    expect(funcTask2(111)).toBe(-111);
  })

  test('Remove first and last character', () => {
    expect(funcTask3('string')).toBe('trin');
    expect(funcTask3('abcdefg')).toBe('bcdef');
    expect(funcTask3('blablabla')).toBe('lablabl');
    expect(funcTask3('jestimnepodetski')).toBe('estimnepodetsk');
    expect(funcTask3('kursderzhimnasever')).toBe('ursderzhimnaseve');
  })

  test('String repeat', () => {
    expect(funcTask4('abc', 4)).toBe('abcabcabcabc');
    expect(funcTask4('a', 3)).toBe('aaa');
    expect(funcTask4('bla', 2)).toBe('blabla');
    expect(funcTask4('pogodi', 12)).toBe('pogodipogodipogodipogodipogodipogodipogodipogodipogodipogodipogodipogodi');
  })
});
