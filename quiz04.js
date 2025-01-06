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

calculator(3, "+", 6); // 결과값 9
calculator(11, "-", 6); // 결과값 5
calculator(6, "*", 3); // 결과값 18
calculator(15, "/", 3); // 결과값 5