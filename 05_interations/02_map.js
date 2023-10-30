const nums = [1,2,3,4,5,6,7,8,9,10]

// in nums array add 10 in all nums

const newNums1 = nums.map((num)=>{
    return num + 10
})

console.log(newNums1);

const newNums2 = nums
        .map((num)=> num * 10)
        .map((num)=> num + 1);

console.log(newNums2);