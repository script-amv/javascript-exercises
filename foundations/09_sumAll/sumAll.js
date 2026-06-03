const sumAll = function(s, e) {
    if(!(Number.isInteger(s) && Number.isInteger(e))) return "ERROR"
    if(s < 0 || e < 0) return "ERROR"
    if(s > e) [s, e] = [e, s];
    let r = 0
    for(let i = s; i <= e; i++) {
        r += i
    }
    return r
};

// Do not edit below this line
module.exports = sumAll;
