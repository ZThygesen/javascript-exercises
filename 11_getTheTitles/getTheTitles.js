const getTheTitles = function(array) {
    const titles = [];
    for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
