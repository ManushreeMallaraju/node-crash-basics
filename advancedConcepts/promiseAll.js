// NOTE: how to call array of promises asyncronously

var myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('My First Promise Resolved');
    }, 500);

})

var mySecondPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve('My Second Promise Resolved');
        reject('My Second Promise Rejected');
    }, 1200);

})

var myThirdPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('My Third Promise Resolved');

    }, 1000);

})

// Calling all promises together asynchronously..
// Any promise rejected will be returned immedtiately to the catch block, without waiting for any other promises 
// to get resolved..

Promise.all(
    [myFirstPromise, mySecondPromise, myThirdPromise])
    .then(
        (results) => { // array of all the promises resolved
            console.log(results);
        })
    .catch((error) => {
        console.log(error);
    })

// NOTE: 2. What is the difference between Promise.all v/s Promise.allsettled
Promise.allSettled(
    [myFirstPromise, mySecondPromise, myThirdPromise])
    .then(
        (results) => { // array of all the promises resolved
            console.log(results);
        })
    .catch((error) => {
        console.log(error);
    })

// NOTE: 3.What is Promise.race?
Promise.race(
    [myFirstPromise, mySecondPromise, myThirdPromise])
    .then(
        (results) => { // array of all the promises resolved
            console.log(`Promise.race() => ${results}`);
            //console.log(results);
        })
    .catch((error) => {
        console.log(error);
    })



