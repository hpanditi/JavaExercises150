function ab_check(str)
    {
        return (/a...b/).test(str) || (/b...a/).test(str);
    }

console.log(ab_check("Chainsbreak"));
console.log(ab_check("pane borrowed"));
console.log(ab_check("abCheck"));

