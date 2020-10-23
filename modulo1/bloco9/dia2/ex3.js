const rnd = () => Math.ceil(Math.random() * 50);

const generateRandomArray = () => Array.from({ length: 10 }, () =>  rnd());
const sumArray2 = array => array.map(number => number ** 2).reduce((acc, curr) => acc + curr, 0);
const sumArray = array => {
    const sum = sumArray2(array);

    if (sum > 8000) {
        throw new Error();
    }

    return sum;
};

const divideArray = sum => [2, 3, 5, 10].map(number => sum / number);

const fetchPromise = async () => {
    try {
        const array = await generateRandomArray();
        const sum = await sumArray(array);
        const array2 = await divideArray(sum);
        //const sum2 = await sumArray2(array2);


        console.log(array2);
    } catch (error) {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
}

fetchPromise();