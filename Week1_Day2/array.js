

function duplicate(arr){
    var newArr=[]
    for(let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]===arr[j]){  
                console.log("Duplicate element is", arr[i]);
                newArr.push(arr[i]);
                break;
        }
    }
}
    return newArr;
}


let arr=[1,2,3,4,5,2,5,6,7,8,1,2,9,9];
console.log("Calling Duplicate function", duplicate(arr));


