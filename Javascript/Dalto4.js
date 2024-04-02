function solution(inputArray) {
    max_consecutive_product = -9999;
    for(i in inputArray) {
        for (i in inputArray) {
            if ((inputArray[i]* inputArray[i-1])>max_consecutive_product) {
            max_consecutive_product = inputArray[i]* inputArray[i-1];
            }
            else if ((inputArray[i]* inputArray[i+1])>max_consecutive_product){
            max_consecutive_product = inputArray[i]* inputArray[i+1];
            }
    }
    
    }
    return max_consecutive_product;
}
inputArray = [3, 6, -2, -5, 7, 3];

document.write(solution(inputArray));