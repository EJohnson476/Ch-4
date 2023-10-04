function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let index = Math.floor(random()*arr.length);
  return arr[index];
}

//TODO: Export the randomFromArray function.
module.export = randomFromArray;