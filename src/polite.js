function dialPositions(n) {
  return _.range(0,n)
    .map(sumOfTheNaturalNumbers)
    .map(steps => (1 + steps) % n )
    // turn 0 into N, as the dial is 1-N, not 0-(N-1)
    .map(mod => mod ? mod : n);
}

function sumOfTheNaturalNumbers(n) {
  //proof: https://cseweb.ucsd.edu/groups/tatami/kumo/exs/sum/
  return (n * ( n + 1 )) / 2;
}

function polite(n) {
  return _.uniq(dialPositions(n)).length !== n;
}

_.range(1, 100).filter(n => !polite(n)).map(n => console.log(n));
