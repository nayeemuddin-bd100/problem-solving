
const arr1 = [1, 2, -1, -2, 0, 4, -4]

function plusMinus(arr) {
  let positive = 0
  let negative = 0
  let zero = 0
  const length = arr.length


  for (let i = 0; i <= length-1; i++){
 
    if (arr[i]> 0) {
      positive +=1
    } else if (arr[i]< 0) {
      negative +=1
    }
    if (arr[i]=== 0) {
      zero +=1
    }
  }

		console.log(Number((positive / length).toFixed(6)),)
		console.log(Number((negative / length).toFixed(6)));
		console.log(Number((zero / length).toFixed(6)));
 
}

console.log(plusMinus(arr1));