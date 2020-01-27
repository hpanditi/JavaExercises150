function check_num(x, y, z)
    {
        if (z < 40 || z > 10000)
            return false;
        else
            if (z >= x && z <= y)
                return true;
            else
                return false;
}

console.log(check_num(40, 4000, 45));
console.log(check_num(80, 320, 79));
console.log(check_num(89, 4000, 30));
