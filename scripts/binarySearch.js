function binarySearch (arr, target)
{
    let left = 0;
    let right = arr.length - 1;

    while (left <= right)
    {
        let middle = Math.floor(arr.length / 2);

        if (target === arr[middle])
        {
            return middle;
        }
        else if (target < arr[middle])
        {
            right = middle - 1;
        }
        else if (target > arr[middle])
        {
            left = middle + 1;
        }
    }
}

console.log(binarySearch([1,2,3,4,5], 3));