function check_three(x, y, z) {
    if (x == y == z) {
        return 30;
    }

    if ( x == y || x == z || y == z) {
        return 40;
}

    return 20;
}

console.log(check_three(8, 8, 8));
console.log(check_three(8, 8, 18));
console.log(check_three(8, 7, 18));
