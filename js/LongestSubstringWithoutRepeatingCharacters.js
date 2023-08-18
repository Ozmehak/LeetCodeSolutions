/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mySet = new Set()
    let max = 0
    let i = 0
    let j = 0
    while (i < s.length && j < s.length) {
        if (!mySet.has(s[j])) {
            mySet.add(s[j++])
            max = Math.max(max, j - i)
        } else {
            mySet.delete(s[i++])
        }
    }
    return max
    
};
