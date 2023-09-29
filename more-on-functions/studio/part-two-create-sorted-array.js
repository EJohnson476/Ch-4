function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
function sorted(otherArr)
{
  let sortedArr = [];
  let length = otherArr.length;


    if(otherArr.length === 0)
    {
      return sortedArr;
    }
    else
    {
      sortedArr.push(findMinValue(otherArr));
      temp = otherArr.indexOf(findMinValue(otherArr));
      otherArr.splice(temp,1);
      return sortedArr.concat(sorted(otherArr));
    }
  

  //sortedArr = otherArr.sort((a,b) => a - b);
/*
  for (let i = 1; i < length; i++)
  {
      for(let j = 0; j < i; j++)
      {
        if(otherArr[i] < otherArr[j])
        {
          let x = otherArr[i];
          otherArr[i] = otherArr[j];
          otherArr[j] = x;
        }
      }
  */

    /*if(otherArr.length === 1)
    {
      return otherArr;
    }
    else
    {
      sortedArr.push(findMinValue(otherArr));
      let temp = otherArr.indexOf(findMinValue(otherArr));
      otherArr = otherArr.splice(temp,1);

      //return sorted(otherArr);
    }
  }
*/
  return otherArr;
}

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//console.log(sorted(nums1));

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
console.log(sorted(nums3));