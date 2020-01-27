function difference_number(n)
    {
        if (n <= 19) {
         return (19 - n); 
        }
        else
        {
         return (n - 19) * 3;
    }
}
console.log(difference_number(12));
console.log(difference_number(19));
console.log(difference_number(22));
