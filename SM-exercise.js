const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
const C = [2, 9, 2, 5, 7, 10];

function isPrimeNumber(number) {

    const root = Math.floor(Math.sqrt(number));
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= root; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}

function subtractWhenOccurringPrimeTimes(A, B) {
    const BSet= new Set(B);
    const ASet = new Set(A);

    const intersectionArray = [...ASet].filter(x => BSet.has(x));

    const occurrenceCountArray = intersectionArray.map(element => {
        return B.reduce((accum, current) => current == element ? accum + 1 : accum, 0);
    });

    const numbersWithPimeTimesOccurance = intersectionArray.filter((element, index) => {
        return isPrimeNumber(occurrenceCountArray[index]);
    });

    const subtractedByPrimeOccurance = [...A].filter(x => !numbersWithPimeTimesOccurance.includes(x));

    return subtractedByPrimeOccurance;
};

console.log(subtractWhenOccurringPrimeTimes(A, B));

