const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + publicVal++);
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }
})();

const moduleB = (function({publicFn, publicVal}){
  publicFn();
  publicFn();
  publicFn();
  console.log(publicVal);
  publicFn();
})(moduleA);



