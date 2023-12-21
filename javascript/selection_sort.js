function selectionSort(arr) {
  let n = arr.length
  for(i=0;i<n-1;i++){
    let minIndex = i
    for(j=i+1;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex= j
      }
    }
    if(minIndex !== i){
      let temp = arr[i]
      arr[i]= arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
