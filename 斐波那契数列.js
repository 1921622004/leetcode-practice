function fibonacci1(n) {
    return n === 1 || n === 2 ? n : fibonacci1(n - 1) + fibonacci1(n - 2)
}

function fibonacci2(n) {
    if (n === 1 || n === 2) return n;
    let a = 1, sum = 1;
    while (n > 2) {
        let temp = sum;
        sum += a;
        a = temp;
        n--;
    }
    return sum
}

