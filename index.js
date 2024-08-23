function generatePwd (num) {  // Generation password
    let str = ''

    for(let i = 0; i < num; i++) {
        let randomNumber = Math.floor(Math.random() * (126 - 32)) + 32   // ASCII code, chary sksvum a 32 hamaric
        let symbol = String.fromCharCode(randomNumber);
        str += symbol
    }

    return str
}





function binarySearch (arr, value,  start = 0, end = arr.length - 1) {   // BinarySearch recursion
    
    let mid = Math.floor((start + end) / 2)


    if(start <= end) {
        if(arr[mid] === value) {
            return mid
        }else if(arr[mid] < value) {
            start = mid + 1
            return binarySearch(arr, value, start, end)
        }else {
            end = mid - 1
            return binarySearch(arr, value, start, end)
        }
    }else {
        return -1
    }
}
