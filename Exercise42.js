function increase_three(x, y, z) {
    if ( y > x && z > y)
    {
        return "strict mode";
    }
    else if (z > y)
        return "soft mode";
    else 
        return "Undefined";
}

console.log(increase_three(10, 15, 31));
console.log(increase_three(24, 22, 31));
console.log(increase_three(50, 21, 15));
