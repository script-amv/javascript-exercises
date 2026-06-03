const removeFromArray = function(arr, ...n) {
    for (const ns of n) {
        arr = arr.filter(word => word !== ns)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
