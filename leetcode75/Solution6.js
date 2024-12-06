/*Explanation:
The algorithm iterates through the  string "s", grouping non-space characters into words and skipping extra spaces. 
Completed words are added to a result array, "ret"[], and any remaining characters are added after the loop. 
The words are then reversed and joined with a single space, producing a properly formatted string with no extra spaces.
*/
var reverseWords = function(s) {
    let ret = [], str = [];
        for(let i=0; i<s.length; i+=1) {
            if(s[i]===' ') {
            if(str.length>0) {
                ret.push(str.join(''));
                str = [];
            }
            continue;
            }
            else str.push(s[i]);
        }
        if(str.length>0) ret.push(str.join(''));
    return ret.reverse().join(' ');
        
};
