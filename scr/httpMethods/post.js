'use strict';

const postCallback = (req, res,  callback) => {
    let buffer = [];
    req.on('data', chunk => {
        buffer.push(chunk);
    });
    req.on('end', () => {
        const result = buffer.join();
        if(callback instanceof Function){
            callback(null, result);
        }
    })
};
const promise = fn => (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
        if(err) reject(err);
        else {
            resolve(data);
        }
    });
});

const post = promise(postCallback);
const sendResponse = async (res, answer) => res.end(answer);

export { post, sendResponse }

