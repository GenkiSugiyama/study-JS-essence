console.log('ESmodule called');

let privateVal = 1;
export let publicVal = 10;

export function publicFn() {
  console.log('publicFn called: ' + publicVal++);
}

function privateFn() {

}