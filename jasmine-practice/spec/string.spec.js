describe('A string', function () {
  let WORD = 'word';

  it('containing 4 letters should have length 4', function () {
    expect(WORD.length == 4).toBe(true);
  });

  it('should be equal to an identical string', function () {
    expect(WORD == 'word').toBe(true);
  });
  // New test
  it('should be more than 5 characters long', function () {
    expect('elephant'.length).toBeGreaterThan(5);
  });
});