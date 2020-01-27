function array_max_diff(arr) {

    let max_result = 0;

    for(let i=0;i<arr.length;i++)
        {
            for(let k=0; k!= i && k<arr.length; k++)
            {
                const diff = Math.abs(arr[i]-arr[k]);
                max_result = Math.max(max_result, diff);
            }
        }
        return max_result;
    }
    console.log(array_max_diff([1, 2, 3, 8, 9]));
    console.log(array_max_diff([1, 2, 3, 18, 9]));
    console.log(array_max_diff([13, 2, 3, 8, 9]));
