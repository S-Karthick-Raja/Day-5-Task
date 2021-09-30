//IIFE Fnctions:

//a.Print odd numbers in an array
(function () {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
    let odds = arr.filter(n => n%2)
    console.log(odds)
})();

//b.Convert all the strings to title caps in a string array
(function (){
    var str = "hi guvi welcome"
    console.log( str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
})();

//c.Sum of all numbers in an array
(function (){
    var arr=[1,2,3,4,5,6,7,8,9,10];
    var add = arr => arr.reduce((a, b) => a + b, 0);
    var sum1 = add(arr);
    console.log(sum1);
})();

//d.Return all the prime numbers in an array
(function () {
    var arr = [1,2,3,4,5,6,7,8,9,10,11];
    var isPrime = num => {
    for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
}
    return num !== 1;
};
const Prime = arr.filter(element => isPrime(element));
console.log(Prime);
})();

//e.Return all the palindromes in an array
(function (){
    const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
    const isPalindrome = el => {
       const str = String(el);
       let i = 0;
       let j = str.length - 1;
       while(i < j) {
          if(str[i] === str[j]) {
             i++;
             j--;
          }
          else {
             return false;
          }
       }
       return true;
    };
    const findPalindrome = arr => {
       return arr.filter(el => isPalindrome(el));
    };
    console.log(findPalindrome(arr));  
})();

//f.Return median of two sorted arrays of same size
(function(arr1, arr2){
    let temp = "";
    for(let i=0; i<arr2.length; i++){
            arr1.push(arr2[i]);
        }
        arr1.sort(function compareNumbers(a, b) {
            return a - b;
          });
        let middle_num = (arr1.length/2)
        let next_middle_num = middle_num - 1;
        let ans = (arr1[middle_num] + arr1[next_middle_num]) / 2;
        return console.log(ans);
})
([1, 13, 345, 226, 318], [232, 1243, 147, 230, 435]);

//g.Remove duplicates from an array
(function (){
    let chars = ['A', 'B', 'A', 'C', 'B', 'D', 'B'];
    let uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
})();

//h.Rotate an array by k times
(function(input, k){
    let arr = [];
    let con = input.length - 1;
    for(let i=1; i<=k; i++){
        for(let j=0; j>=0; j--){
            let initial = con - j;
            arr.push(input[initial]);
            if(j === 0){
                j = input.length;
            }
            else if(j === 1){
                break;
            }
        }
        if(i < k){
            input = arr;
            arr = [];
        }
    }
    return console.log(arr);
})
([10, 23, 34, 56, 25], 2);