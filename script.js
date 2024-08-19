let students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    },
];

let scores = [91, 81, 71, 61, 51];

let degrees = ['A', 'B', 'C', 'D', 'E'];

function calcSum(scr1, scr2) {
    let sum = scr1 + scr2;
    return sum;
}
function calcFinal() {
    for (let index = 0; index < students.length; index++) {
        students[index].sum = calcSum(students[index].score1, students[index].score2);

        if(students[index].sum >= 51) {
            console.log(students[index].name + ' passed final exam successfully');

            for (let x = 0; x < scores.length; x++) {
                if(students[index].sum >= scores[x]); {
                    console.log('He has ' + students[index].sum + ' points and he got diploma with degree ' + degrees[x]);
                    console.log('--------------');
                    break;
                }
                
            }
        } else {
            console.log(students[index].name + ' got ' + students[index].sum + ' points, has failed and has to try next year');
            console.log('-------------');
        }
    }
}

calcFinal();