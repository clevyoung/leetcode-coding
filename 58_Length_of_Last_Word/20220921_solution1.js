var lengthOfLastWord = function(s) {
    const wordArr = s.trim().split(' ');
    
    return wordArr.pop().length
};