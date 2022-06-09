const fibonacci = function(index) {
    let first = 1;
    let next = 1;
    let num = 0;
    for (let i = 2; i < index; i++) {
        num = first + next;
        first = next;
        next = num;
    }
    return num;
};

// Do not edit below this line
module.exports = fibonacci;
