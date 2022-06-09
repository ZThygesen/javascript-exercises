const palindromes = function (phrase) {
    newPhrase = phrase.toLowerCase().replace(/[^a-z]/g, "");
    return newPhrase.split("").reverse().join("") === newPhrase;
};

// Do not edit below this line
module.exports = palindromes;
