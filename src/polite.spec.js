describe('Dial position sequence', () => {
  it('The first six positions for n=12 would be 1, 2, 4, 7, 11, and 4', () => {
    expect(dialPositions(12).slice(0, 6).join(', ')).toEqual('1, 2, 4, 7, 11, 4');
  });

  it('For n=5, you get the sequence 1-2-4-2-1', () => {
    expect(dialPositions(5).join(', ')).toEqual('1, 2, 4, 2, 1');
  });

  it('The sequence for n=6 is 1-2-4-1-5-4', () => {
    expect(dialPositions(6).join(', ')).toEqual('1, 2, 4, 1, 5, 4');
  });

  it('The sequence for n=4 is 1-2-4-3', () => {
    expect(dialPositions(4).join(', ')).toEqual('1, 2, 4, 3');
  })

  it('Numbers with duplicates in the sequence are polite', () => {
    expect(polite(6)).toBe(true, 6);
    expect(polite(5)).toBe(true, 5);
    expect(polite(12)).toBe(true, 12);
    expect(polite(4)).toBe(false, 4);
    expect(polite(2)).toBe(false, 2);
  });

  it('Console logs the impolite numbers', () => {
    _.range(1, 10000).filter(n => !polite(n)).map(n => console.log(n));
  });
});
