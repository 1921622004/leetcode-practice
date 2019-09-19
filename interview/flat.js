const a = [1, [2, 3, [4, 5]]];

function flatArray1(ary) {
    return eval(`[${ary + ''}]`)
}

function flatArray2(ary) {
    return ary.reduce((a,b) => {
        return a.concat(Array.isArray(b) ? flatArray2(b) : b)
    },[])
}

function flatArray3(ary) {
    return ary.join().split(',')
}

/**
 * 
 * @param {Numer[]} ary 
 */
function flatArray4(ary) {
    return Array.flat(ary, Infinity)
}
