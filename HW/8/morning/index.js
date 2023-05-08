res = sumDigits(1234);
console.log(`res = ${res}`);

function sumDigits(x) {
    x = x + '';
    let sum = 0;
    for(i = 0; i < x.length; i++) {
        sum += +(x.charAt(i));
    };
    return sum; 
}

// res = luckyNumber(123871); // 1 + 2 + 3 == 8 + 7 + 1;
res = luckyNumber(1234321); //1 + 2 + 3 == 3 + 2 + 1;
console.log(res);

function luckyNumber(x) {
    x = x + '';
    let sumFirst = 0;
    for(i = 0; i < 3; i++) {
        sumFirst += +(x.charAt(i));
    };
    
    let sumSecond = 0;
    if (x.length > 6) {
        for(i = 4; i < x.length; i++) {
            sumSecond += +(x.charAt(i));
        };
    } else {
        for(i = 3; i < x.length; i++) {
            sumSecond += +(x.charAt(i));
        };
    }

    return sumFirst == sumSecond ? 'Lucky' : 'Unlucky';
    
}

function banana() {
    let a = 'a';
    let b = 'b';
    string = b + a + + a + a
    return string.toLowerCase();
}

console.log(banana());






