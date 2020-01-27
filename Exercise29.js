function number_check3(x, y, z)
    {
        return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
    }
console.log(number_check3(50, 90, 99));
console.log(number_check3(5, 9, 199));
console.log(number_check3(65, 89, 199));
console.log(number_check3(65, 9, 199));