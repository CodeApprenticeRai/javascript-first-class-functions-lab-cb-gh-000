function callback(){
  console.log("Call back Func Ran.");
  return;
}

function countdown(callback){
  window.setTimeout(2000);
  callback();
  return; 
}