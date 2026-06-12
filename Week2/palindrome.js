function palindrome(){

    console.log("Checking if the string is a palindrome or not");
    let s = "madam"
    let reversed = s.split('').reverse().join('');
    if(s === reversed){
        console.log(`${s} is a palindrome`);
    } else{
        console.log(`${s} is not a palindrome`);
    }
}

palindrome()