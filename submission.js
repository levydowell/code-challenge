const findSum = function(array) {
    var sum = 0;
    for (val of array) {
        sum += val;
    }
    return sum
  };
  
  const findFrequency = function(array) {
    var count = {};
    var most = '';
    var least = '';
    // iterate through `array` to assign key value pairs to `count`.
    for (index of array) {
        if (count[index]) {
            count[index] +=1;
        } else {
            count[index] = 1;
        }
    }
    // find key with highest pair in `count`.
    var tempValue = 0;
    for (entry of Object.keys(count)) {
        if (count[entry] > tempValue) {
            most = entry;
        }
        tempValue = count[entry];
    }
    // find key with lowest pair in `count`.
    for (entry of Object.keys(count)) {
        if (count[entry] < tempValue) {
            least = entry;
        }
        tempValue = count[entry]
    }
    result = {
        "most": most,
        "least": least,
    };
          
    return result
  };
  
  const isPalindrome = function(str) {
    var word = str.toLowerCase();
    var reverse = "";
    for (i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    };
    if (reverse === word) {
        return true
    } else{
        return false
    }
  };

  const largestPair = function(array) {
    var a = 0;
    var b = 0;
    product = 0;
    for (i = 1; i < array.length; i++) {
        a = array[i];
        b = array[i - 1];
        if (a * b > product) {
            product = a * b;
        }
    }
    return product
  };
  
  const removeParenth = function(str) {
    var start = null;
    var end = null;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            start = i;
        }
        if (str[i] === ")") {
            end = i;
        }
    }
    var parenthesis =  str.slice(start, end + 1);
    var withoutParenthesis = str.replace(parenthesis, "")
    return withoutParenthesis
  };
  
  const scoreScrabble = function(str) {
    var pointReference = {
        1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
        2: ["d", "g"],
        3: ["b", "c", "m", "p"],
        4: ["f", "h", "v", "w", "y"],
        5: ["k"],
        8: ["j", "x"],
        10: ["q", "z"],
    }
    points = 0;
    for (i = 0; i < str.length; i++) {
        for (key of Object.keys(pointReference)) {
            for (letter of pointReference[key]) {
                if (str[i] === letter) {
                    points += Number(key);
                }
            }
            }
        }
    return points    
  };
