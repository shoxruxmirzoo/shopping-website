const   p = new Promise ((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve('Facebook dan API olindi...');
    }, 2000);
});

const s = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve('Google API bilan aloqa ornatilmoqda');
    }, 2000);
})

Promise.all([p,s])
    .then(result => console.log(result));