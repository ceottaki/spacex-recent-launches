import { ArrayJoinPipe } from './array-join.pipe';

describe('ArrayJoinPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayJoinPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms an array to a string joined by a given character', () => {
    const pipe = new ArrayJoinPipe();
    expect(pipe.transform(['a', 'b'], ',')).toBe('a,b');
  });
});
