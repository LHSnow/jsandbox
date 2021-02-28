describe('Dial', () => {
  it('The first six positions for n=12 would be 1, 2, 4, 7, 11, and 4', () => {
    expect(dialPositions(12).slice(0,6)).toEqual([1, 2, 4, 7, 11, 4]);
  });

  it('For n=5, you get the sequence 1-2-4-2-1', () => {
    expect(dialPositions(5)).toEqual([1,2,4,2,1]);
  })

  it('The sequence for n=6 is 1-2-4-1-5-4', () => {
    expect(dialPositions(6)).toEqual([1,2,4,1,5,4]);
  });
});
