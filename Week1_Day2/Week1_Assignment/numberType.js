
function numberType(num){

    var n = num;

    if(n>0){
        console.log(`${n} is Positive`);
    }else if(n<0){
        console.log(`${n} is Negative`);
    }else{
        console.log(`${n} is Zero`);
    }
}

numberType(-10);
numberType(0);
numberType(10);