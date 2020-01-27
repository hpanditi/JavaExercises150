function sum_two (x, y) 
    {
        const sum_two = x + y;
        if (sum_two >= 50 && sum_two <= 80) {
            return 65;
        }
        return 80;
}

console.log(sum_two(30, 20));
console.log(sum_two(90, 80));
