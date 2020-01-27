function check_two(x, y) {
    return (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
}

console.log(check_two(15, 9));
console.log(check_two(25, 15));
console.log(check_two(7, 8));
console.log(check_two(25, 10));
console.log(check_two(5, 9));
console.log(check_two(7, 9));
console.log(check_two(9, 25));

