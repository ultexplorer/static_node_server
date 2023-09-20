'use strict'

function add(a, b, callback) {
    // do some calculation
    let result = a + b;
    // pass null as the error and result as the second argument
    callback(null, result);
}

add(1, 2, (err, data) => {
    if(err) console.log(err);
    else {
        console.log(data);
        return data;
    }
})

const promisify = fn => (...args) => {
    return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        })
    })
};

const addProm = promisify(add);

addProm(1, 2).then(result => console.log(result));