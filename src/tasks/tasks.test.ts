import {reducer, rest} from "./tasks";

test('many numbers sum',() => {
    expect(rest(10,4,3,2)).toBe(19)
});

test('reducer should work', () => {
    expect(reducer(2,5,{type: 'sum'})).toBe(7)
    expect(reducer(8,5,{type: 'substract'})).toBe(3)
    expect(reducer(2,4,{type: 'mult'})).toBe(8)
    expect(reducer(15,5,{type: 'div'})).toBe(3)
})