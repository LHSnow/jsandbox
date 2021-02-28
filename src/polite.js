function dialPositions(n) {
  return _.range(0,n)
    .map(i => (1 + sumOfTheNaturalNumbers(i)) % n )
    .map(i => i ? i : n);
}

function sumOfTheNaturalNumbers(n) {
  //proof: https://cseweb.ucsd.edu/groups/tatami/kumo/exs/sum/
  return (n * ( n + 1 )) / 2;
}

function polite(n) {
  return _.uniq(dialPositions(n)).length !== n;
}
