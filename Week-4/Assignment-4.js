// callback
// function delayedResult(n1, n2, delayTime, callback) {
//     setTimeout(() => callback(n1 + n2), delayTime);
// }

// promise
function delayedResultPromise(n1, n2, delayTime) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(n1 + n2);
        }, delayTime);
    });
} 

delayedResultPromise(4, 5 , 3000).then(console.log)
// 9 (4+5) will be shown in the console after 3 seconds

// async
async function main() {
    const result = await delayedResultPromise();
    console.log(result);
}
main(); // result will be shown in the console after <delayTime> seconds