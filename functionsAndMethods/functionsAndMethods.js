// FUNCTIONS

// console.log("abc".toUpperCase())

function myFunction(i)
{
    console.log(i.toUpperCase());
}

myFunction("asdfghjkl");

function sum(x, y)
{
    s = x + y;
    return s;
}

let result = sum(123, 567)
console.log(result)


// Arrow function
a = 123
b = 567

const arrowSum = (a, b) => {
    console.log(a+b);
};

const arrowMul = (a, b) => {
    console.log(a*b);
};

arrowSum(a, b);
arrowMul(a, b);

// return number of vowels

function countVowels(str)
{
    let count = 0;
    
    for (const char of str)
    {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("somay"))

const arrowCountVowels = (str) =>
{
    let count = 0;
    
    for (const char of str)
    {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    return count;
}

// Methoods are those functions which are associated with some kind of data structure like "abc".toUpperCase() is bound t strings.

// "forEach" loop in arrays
// arr.forEach(callBackFunction)
// callBackFunction : here, a function passed as an argument to execute for each element in the array. 
// params that can be passed in callBackFunction : array values, indices and array itself.

let arr = [1,2,3,4,5,6,7]

// arr.forEach(function print(val)
// {
//     console.log(val);
// });

arr.forEach((val, idx, arr) =>
{
    console.log(val**2, idx, arr);
});

// forEach function is an example of Higher Order Function because it either returns a function or takes a function as a parameter.


// some array methods
// arr.map(callbackFunc(value, index, array))
// forEach is used when we want to perform a calculation or print something whereas map i used to make a new array.

let newArr = arr.map((val) => 
{
    return val*3;
})

// filter method
// creates a new array of elements that give true for a condition/filter.

let evenArr = newArr.filter((val) =>
{
    return val%2 === 0;
})
console.log(evenArr);


// reduce method
//performs some operation on array and redeuce it to a single value.

// const initialValue = 0;
// const sumArray = arr.reduce((accumulator, curr) => accumulator + curr, initialValue);

const sumArray = arr.reduce((res, curr) =>
{
    // starts as res = 1, curr = 2 ; then sum is stored as res -> res = 3, curr = 3 and so on.
    return res + curr;
})

console.log(sumArray);

const smallest = newArr.reduce((curr, next) =>
{
    return curr < next ? curr : next; 
})

console.log(smallest);