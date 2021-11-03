var listOfNumbers = [2, 4, 5, 6, 7, 11, 4, 222, 9, 19]

// function highestProductOfList(list) {

//     let ascending = list.sort()
//     console.log('ascending: ', ascending);
//     let answer = ascending[-1] * ascending[-2] * ascending[-3]
//     return answer;
// };
function highestProductOfList2(list) {
    let number1 = list[0]
    let number2 = 1
    let number3 = 1
    for(i=0; i <list.length; i++) {
        if (list[i] > number1) {
            prevNum1 = number1
            number1 = list[i]
            if (prevNum1 > number2) {
                let prevNum2 = number2
                number2 = prevNum1
                if (prevNum2 > number3) {
                    number3 = prevNum2
                }
            }
        } else if (list[i] > number2) {
            let prevNum2 = number2
                number2 = list[i]
                if (prevNum2 > number3) {
                    number3 = prevNum2
                }
        } else if (list[i] > number3) {
            number3 = list[i]
        }
    }
    let result = number1 * number2 * number3;
    console.log("result: ", result);
    return result
}

console.log('result: ', highestProductOfList2(listOfNumbers));