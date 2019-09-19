function clone1(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function clone2(obj) {
    if (obj === null || typeof obj !== 'object') return obj
    const newObj = new obj.constructor();
    for (let key in Object.getOwnPropertyDescriptors(obj)) {
        newObj[key] = clone2(obj[key])
    }
    return newObj
}
