const findTheOldest = function(array) {
    let indexOldest = 0;
    let oldest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath - array[i].yearOfBirth > oldest) {
            oldest = array[i].yearOfDeath - array[i].yearOfBirth;
            indexOldest = i;
        }
    }
    return array[indexOldest];

};

// Do not edit below this line
module.exports = findTheOldest;
