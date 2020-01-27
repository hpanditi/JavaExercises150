function vowel_count(str)
{

    return str.replace(/[^aeious]/g, "").length;
}

console.log(vowel_count("Python"));
console.log(vowel_count("w3resource.com"));
