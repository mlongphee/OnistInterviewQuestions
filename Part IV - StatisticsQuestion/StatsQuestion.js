
function cerealBoxProbability(N, M){
  var result,nPr,allComb;
if(M < 0 || N > 0){

  if(M === 1){
    return 1;
  }
  if(M > N){
    return 0;
  }
  if(M == 2){
    return ((Math.pow(M, N) - M)/Math.pow(M, N));
  }

  nPr = factorial(N) / factorial(N-M);
  result = (nPr/Math.pow(M, N));

  return result;
} else {
  throw "Please enter a positive Number";
}

}

function factorial(num){
  if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}

console.log(Math.round(cerealBoxProbability(3, 3) * 100) + '%');
