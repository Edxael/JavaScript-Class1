
// 01- create a function;
// 02- sorth the array;
// 03- filter out number that are > targer;
// 04- add numbers when match found return combo.
// 05- if no combo found return "No Match found";

function founndCombo(arr, target){
    arr = arr.sort((a, b) => {return a-b;});
    arr = arr.filter((x) => {return x <= target;});

    for(x in arr){
        for(y in arr){
            if((arr[x] + arr[y]) === target){return [arr[x], arr[y]];}
        }
    }

    return "Not match found.";
}



var arr = [3, 34, 4, 12, 5, 2];
// getCombo(arr, target);
console.log(getCombo(arr, 9));




// function getCombo(arr, target){
//     console.log(arr);
//
//     arr.sort((a, b) => {return a - b;});
//     console.log(arr);
//
//     arr = arr.filter((x) => {return x <= target});
//     console.log(arr);
//
//     for(x in arr){
//         for(z in arr){
//             if((x + z) === target){return [x, z];}
//         }
//     }
//     return "No mathc found in the given numbrs :("
// }
