function callback(){
  console.log("Call back Func Ran.");
  return;
}

function countdown(callback){
  window.setTimeout(2000);
  callback();
  return;
}

function createMultiplier(multiplierValue){
  return function(multiplierValue, otherValue) {
    return multiplierValue * otherValue;
  }
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);

$('h1').append(doubler(5));
