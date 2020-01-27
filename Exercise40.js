function two_nums(x, y) {
    if (x == 8 || y == 8) {
        return true;
    }

    if (x + y == 8 || Math.abs(x - y) == 8)
    {
        return true;
    }

    return false;
}

console.log(two_nums(7, 8));
console.log(two_nums(16, 8));
console.log(two_nums(24, 32));
console.log(two_nums(17, 18));

