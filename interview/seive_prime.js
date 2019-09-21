
/**
 * 
 * @param {Number} n 
 */
function seive_prime(n) {
    if (n < 2) return
    let ary = Array.from({ length: n - 2 }, (_, v) => v + 2);
    let prime = null;
    let res = [];
    while (prime = ary.shift()) {
        ary = ary.filter(v => v % prime !== 0);
        res.push(prime)
    }
    return res
}

console.log(seive_prime(1000));
