rnd = () => Math.ceil(Math.random() * 50);

const fetchPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const myArray = Array.from(
            { length: 10 }, () =>  rnd())

        const sum = myArray.map(number => number ** 2)
                            .reduce((acc, curr) => acc + curr, 0);
                            
        (sum < 8000) ? resolve(sum) : reject();
    })

    promise
        .then((sum) => [2, 3, 5, 10].map(number => sum / number))
        .then(array => array.reduce((acc, curr) => acc + curr, 0))
        .then(sum => console.log(sum))
        .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};

fetchPromise();