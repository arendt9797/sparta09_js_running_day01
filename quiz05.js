const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculator(a, op, b) {
    if (op === "+")
        return a + b
    else if (op === "-")
        return a - b
    else if (op === "*")
        return a * b
    else
        return a / b
}

function plusScores(scores) {
    scores.forEach((e, i) => {
        scores[i] = calculator(e, "+", 3)
    });
}

plusScores(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]