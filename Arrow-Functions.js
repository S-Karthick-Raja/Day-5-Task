//Arrow Function:

// a.Print odd numbers in an array
const odd = (arr) =>{
    return arr.filter(n => n%2)
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(odd(arr));

// b.Convert all the strings to title caps in a string array
const caps = (String) =>{
return String.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
}
let String = "hi guvi welcome"
console.log(caps(String));

//c.Sum of all numbers in an array
const add = (arr1) =>{
    return arr1.reduce((a, b) => a + b, 0); 
}
let arr1=[1,2,3,4,5,6,7,8,9,10];
let sum1 = add(arr1);
console.log(sum1);

//d.Return all the prime numbers in an array
var array = [1,2,3,4,5,6,7,8,9,10,11];
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
}
return num !== 1;
};
const Prime = array.filter(element => isPrime(element));
console.log(Prime);

//e.Return all the palindromes in an array
let is_palindrom = (input) =>{
    let temp = "";
    let arr = [];
    for(let j=0; j<input.length; j++){
        arr = input[j].split("");
        for(let i=arr.length-1; i>=0; i--){
        temp += arr[i] + " ";
        temp = temp.trim();
    }
    if(temp == input[j]){
        console.log(temp);
    }
    temp = "";
    }
};
is_palindrom(["MADAM", "101", "GUVI", "NURSESRUN", "569"]);


