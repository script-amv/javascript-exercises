const reverseString = function(s) {
    let r = ""
    for (let i = s.length; i > 0; i--) {
        r += s[i-1]
    }
    return r
};
// Do not edit below this line
module.exports = reverseString;