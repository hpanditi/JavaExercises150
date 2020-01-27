function alphabet_soup(str) {

    return str.split("").sort().join("");

}

console.log(alphabet_soup("Python"));
console.log(alphabet_soup("Exercises"));
