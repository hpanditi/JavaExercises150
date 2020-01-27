function contins13(nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
        return true
    }
    else
    {
        return false
    }
}

console.log(contins13([1, 5]));
console.log(contins13([2, 3]));
console.log(contins13([7, 5]));
