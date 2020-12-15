import { BoolToYesNoPipe } from './bool-to-yes-no.pipe';

describe('BoolToYesNoPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolToYesNoPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms true to "Yes"', () => {
    const pipe = new BoolToYesNoPipe();
    expect(pipe.transform(true)).toBe('Yes');
  });

  it('transforms false to "No"', () => {
    const pipe = new BoolToYesNoPipe();
    expect(pipe.transform(false)).toBe('No');
  });

  it('throws an error when second argument has less than two elements', () => {
    const pipe = new BoolToYesNoPipe();
    expect(() => pipe.transform(true, ['Yes'])).toThrowError();
  });
});
