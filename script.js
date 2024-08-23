function finalResult(score) {
    if(score >= 81) {
        return function(name) {
            console.log(name + ', you passed an exam and you are student of state university');
        }
    } else if (score >= 51) {
        return function(name) {
            console.log(name + ', you passed an exam and you are student of state collage');
        }
    } else {
        return function(name) {
            console.log(name + ', you failed');
        }
    }
}

let result1 = finalResult(77);
result1('john');

let result2 = finalResult(44);
result2('jane');

finalResult(96)('mary');