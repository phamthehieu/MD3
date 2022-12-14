async function largestNumber(arr) {
    if (arr instanceof Array) {
        let sum = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (sum < arr[i]) {
                sum = arr[i]
            }
        }
        return sum
    }
    throw new Error(`Khong phai 1 mang`)
}

async function f() {
    try {
        let result = await largestNumber([3, 4, 5, 6, 7, 8, 9, 10])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

f()