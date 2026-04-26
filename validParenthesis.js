function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}':'{',
        ']':'['
    }

    for( let char of s) {
        if(map[char]) {
            if(stack.pop() !== map[char]) return false;
        } else {
            stack.push(char)
        }
    }
    
    return stack.length === 0;
}

const checkArr = "[{[()]}]}"

const result = isValid(checkArr);

console.log(result);

