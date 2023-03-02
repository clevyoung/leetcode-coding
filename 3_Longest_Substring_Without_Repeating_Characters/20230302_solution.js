
/**
 * Sliding Window
 * The sliding window technique is actually very similar to the two pointers technique. The main difference is when and
 * how to apply these two techniques. The sliding window technique actually has more requirements than the two pointer technique as to
 * when it can be applied.
 * Form a window over some portion of sequential data, then move that window through the data to capture different parts of it.
 * 
 * Sequential data just means data where the order in which the data appears is important. And this is the case with both strings and arrays.
 * Strings and arrays capture data in some kind of sequence. And the order of that data matters, whether it be the characters in the string or the order of the elements in the array
 * Both of these represent sequential data.
 * The only other data model that has the sequential data is linked list. You mostly apply the sliding window technique on strings and arrays and even linked list. 
 * What we want to do is we want to form some kind of window over a smaller portion of this data.
 * The window size can even change dynamically as the code is running
 * The other thing is that then we want to move this window throughout the data and therefore capture different part of it.
 * It can even jump multiple steps.
 * We can also even take steps back if necessary.
 * The main idea here is just that we want to look at some smaller portion of the sequential data.
 * 
 * Given an array of integers, find two contiguous integers that form the greatest sum.
 * [1,3,7,9,2,4]
 * Contiguous means that these elements need to be side by side. They cannot be broken apart.
 * We might initialize two pointers representing the left and right boundaries of this window.
 * So here the left and right would be pointing to the indices of the elements that represent the respective bounds of this window.
 * 
 * what we want to do is use a left and right pointer to represent those boundaries. And here we're going to use them to represent the actual string that we are building, or at least the substring.
 * We're also going to keep track of the longest value that we've seen thus far, and we still need to keep track of some kind of hash map that holds all of the characters that we've seen thus far.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    const seenChar = {};
    left = 0, longest = 0; // initialize value
    // right pointer scan across this entire string. It's never going to go back, but it's always going to advance one character at a time. It's based on the iteration of our code when this right pointer is at some character.
    // We decide whether or not the left pointer is going to move.
    for (let right = 0; right < s.length; right++){
        const currentChar = s[right];
        const prevSeenChar = seen[currentChar];
        if (prevSeenChar >= left) { // if the value is seen and it's greater than or equal to left boundary, then what we want to do is bump this left boundary to that value plus one.
            left = prevSeenChar + 1;
        }
        seenChar[currentChar] = right; // regardless of what the conditional logic is, we always want to update that value in hash map anyway
        longest = Math.max(longest, right-left+1)
    }
    return longest
};