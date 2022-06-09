const removeFromArray = function(...args) {
    const arry = args[0];
    const newArry = []
    arry.forEach((item) => {
        if (!args.includes(item)) {
            newArry.push(item);
        }
    })
    return newArry;
};

// Do not edit below this line
module.exports = removeFromArray;
