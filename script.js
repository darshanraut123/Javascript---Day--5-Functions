//######################################################################################################################################
// POINT 1 : https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit
// All solutions below
//######################################################################################################################################

NOTE: TO GET THE O/P please uncomment the console.log


//Print all odd numbers in an array
(function(){
    const nums = [1,2,3,4,5,6,7,8,9,32,50,42,88,12,44,88,37,55];
    let odd = nums.filter(num=>num%2!=0);
    //odd.forEach(num=>console.log(num))
})();

//Print all names in uppercase from an array
(function(){
    let names = ["darshan","sharad","ashish","neelima","leena","shivani","ragav"]
    let upperCaseNames = names.map(name=>name.toUpperCase());
    //upperCaseNames.forEach(name=>console.log(name))

})();



//Sum of all nums in array
(function(){
    const nums = [1,2,3,4,5,6,7,8,9,32,50,42,88,12,44,88,37,55];
    let sum = 0;
    nums.forEach(num=>{sum+=num});
    //console.log(`Sum of all nos is : ${sum}`);
})();


//Return all the prime numbers in an array
(function(){
    const nums = [17,1,82,77,17,57,11,2,91,3,28,4,5,6,99,7,8,9,32,50,42,88,12,44,88,37,55];
    let odds = nums.filter((num)=>{
        flag = true;
        if(num==1) return num;
        for(i=2;i<=num/2;i++){
            if(num%i==0) {
                flag =false;
                return flag;
            }
        }
        if(flag)
            return num;
    });
      //console.log(odds);  
})();


//Return all palindromes in array
(function () {
    let numData = [321123, 876575, 121, 777, 303, 8366, 4430344, 678876];
    let ans = numData.filter(a => {
        let numData = a;
        let secNum = 0;
        while (numData > 0) {
            let a = numData % 10;
            secNum = (secNum * 10) + a;
            numData = Math.floor(numData / 10);
        }
        if (secNum == a)
            return a;
        else
            return false;

    }
    );

   // console.log(ans);
})();

//Median of an array
(function () {
    let arr1 = [1, 14, 4, 2, 6, 5, 8, 17];
    let arr2 = [2, 7, 1, 6, 4, 10, 11, 13];

    arr1.forEach(num => {
        if (arr2.includes(num));
        else arr2.push(num);
    });
    let arr = arr2.sort((a,b)=>a-b);

    //console.log(arr);
    let halfLen = arr.length/2;
    if(arr.length%2!=0)
        {
            let median = Math.floor(halfLen/2);
            //console.log(`Median is : ${arr[median]}`);
        }
    else{
            let left = halfLen+1;
            let right = halfLen+2;
            //console.log(`Median is : ${left+right/2}`);
        }

})();


//Remove duplicated from array
(function(){
    let nums = [2, 7, 1, 6, 4, 10, 11, 13,12,11,13,7,2,1];
    let ans = nums.filter(num=>nums.indexOf(num)==nums.lastIndexOf(num));
    nums.forEach((num)=>{
        if(ans.includes(num));
        else ans.push(num);

    });
   // console.log(`Array with no duplicates: ${ans}`);
})();


//Rotate the array K times
(function () {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [1, 2, 3, 4, 5];
    let k = 3;
    for(i=0;i<k;i++){
        for(j=0;j<array1.length;j++){
            if(j==array1.length-1){
                let b = 0;
                array1[b]=array2[j];
                array2= Array.from(array1);
                break;
            }
            array1[j+1]=array2[j];
        }
    }
   // console.log(array1);
}) ();

//######################################################################################################################################
// POINT 2 : https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit
// All solutions below
//######################################################################################################################################

//Program to add 5

var num = 10;
function addFive(num) { 
    return num+5;
}
var result = addFive(num)

//######################################################################################################################################

//Program to get opposite
var num = 5;
function getOpposite(num) {
    if(num==0) return 0;
    else return (-num);
}
var result = getOpposite(num)

//######################################################################################################################################

//progtam to convert min to sec
var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)

//######################################################################################################################################

//String to int
var mystr = "5";
function toInteger(str) {
    return Math.floor(Number(str));
}
var myint = toInteger(mystr)

//######################################################################################################################################

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)

//######################################################################################################################################

//Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);

//######################################################################################################################################

//Convert Hours into Seconds
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    let hts = [];
    arr.forEach(element => {
        hts.push(element*60*60);
    });
    return hts;
}
var data = hourToSeconds(arr)

//######################################################################################################################################

//Perimeter of rectangle
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7)

//######################################################################################################################################

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
    return num1+num2<100?true:false;    
}
var res = lessThan100(22,15)

//######################################################################################################################################

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters.
//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3)

//######################################################################################################################################

function CountAnimals(tur,horse,pigs) {
    let sum = 0;
    sum = (tur*4+horse*4+pigs*4);
    return sum;
}
var legs = CountAnimals(2,3,5)

//######################################################################################################################################

//Frames per second
function frames(num1,num2) {
    return num1*60*num2;
}
var fps = frames(1,2)

//######################################################################################################################################

//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
    return num1%5==0?true:false;
}
var divisible = divisibleByFive(5)

//######################################################################################################################################
//Is even check

function isEven(num){
    if(num==0) true;
    else if(isNaN(num)) return -1;
    else return num%2==0?true:false;
}
   var even = isEven(5);

//######################################################################################################################################
//Both odd ?

function areBothOdd(num1, num2){
    return ((num1%2!=0) && (num2%2!=0)) ? true : false;    
}
areBothOdd(1,3);

//######################################################################################################################################
//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

function getFullName(...Name){
    return Name.join(" ");
}
getFullName("GUVI","GEEK");

//######################################################################################################################################
//Length of the word

function getLengthOfWord(word1){
    if(word1=="") return 0;
    else if(!isNaN(word1)) return -1;
    else return (Array.from(word1)).length;
   }
   getLengthOfWord("GUVI");


//######################################################################################################################################
//Write a function called “isSameLength”.
function isSameLength(word1, word2){
    let len1 = (Array.from(word1)).length;
    let len2 = (Array.from(word2)).length;
    if(len1==len2){
        return true;
    }
    return false;
}
isSameLength("guvi","geek");

//######################################################################################################################################
//Create a function to calculate the distance between two points defined by their x, y coordinates

function getDistance(x1, y1, x2, y2)
{
    //d=√((x_2-x_1)²+(y_2-y_1)²) 
        let powers  = Math.pow(x1-x2,2) + Math.pow(y1-y2,2)
        return Math.sqrt(powers);
    }

getDistance(100, 100, 400, 300).toFixed(2);

//######################################################################################################################################
//Write a function called “getNthElement”.

function getNthElement(array,n){
    return array[n];

}
getNthElement([1, 3, 5], 1);

//######################################################################################################################################
//Write a function called “getLastElement”.

function getLastElement(array){
    return array[array.length-1];
   }
getLastElement([1, 2, 3, 4]);

//######################################################################################################################################
//Write a function called “getLastElement”.

var obj = {
    mykey: "value"
   };
   function getProperty(o, key) {
    return o[key];
}
getProperty(obj,"mykey");

//######################################################################################################################################
//Write a function to add prop in object

var obj = { };
   function addProperty(o, key){
    o[key]=true;
    return o;

}
addProperty(obj,"myValue");

//######################################################################################################################################
//Write a function to remove prop in object
var obj = { key : "darshan"};
function removeProperty(o, key){
    delete o.key;
    return o;

}
removeProperty(obj,"key");

//######################################################################################################################################
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function(arr) {
    let sumPlus = 0;
    let sumMinus = 0;
    let ans = [];
    for(val of arr){
        if(val>=0)
            sumPlus+=val;
        else
            sumMinus+=val;
    }
    ans.push(sumPlus);
    ans.push(sumMinus);
    return ans;
}
ar2(arr);

//######################################################################################################################################
//Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPositives(ar)
{
    return ar.filter(val=> val>0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
ar2;

//######################################################################################################################################
//powers by 2 from 0-n 

function powersOfTwo(n){
    let res =[];
    for(i=0;i<=n;i++){
        res.push(Math.pow(2,i));
    }
    return res;
  }

powersOfTwo(5);

//######################################################################################################################################
//Max number in array
function findMax(ar)
{
    let max ;
    return ar.reduce((num1,num2)=> { if(num1>num2) return num1;else return num2;})
    
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);

//######################################################################################################################################
//reverse a string
var s = reverseString("JavaScript");

function reverseString(s)
{
    let arr = s.split("");
    arr = arr.reverse();
    return arr.join("");
}

//Call it by s;

//######################################################################################################################################
//Merge two arrays
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

function mergeArrays(arr1, arr2)
{

    arr2.forEach(val=>arr1.push(val));

 return arr1;
}
var ar = mergeArrays(ar1, ar2);
//call it by : console.log(ar);

//######################################################################################################################################
//Calculate the sum of numbers received in a comma delimited string

function sumCSV(nums)
{
    nums = nums.split(",").map(val=> parseInt(val.trim()));
    let ans  = nums.reduce((num1,num2)=>{
        return num1+num2;
    });
    return ans;
}
sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9");

//######################################################################################################################################
// POINT 3 : https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit
// All solutions below .Do the below programs in arrow functions
//######################################################################################################################################

//a.Print odd numbers in an array
    var odd = ()=>{
        const nums = [1,2,3,4,5,6,7,8,9,32,50,42,88,12,44,88,37,55];
        let odd = nums.filter(num=>num%2!=0);
        //odd.forEach(num=>console.log(num));
    }

    odd();


//b.Convert all the strings to title caps in a string array
var call = ()=>{
    let names = ["darshan","sharad","ashish","neelima","leena","shivani","ragav"];
    let upperCaseNames = names.map(name=>name.toUpperCase());
  //upperCaseNames.forEach(name=>console.log(name));

}
call();



//c.Sum of all nums in array
var call = ()=>{
    const nums = [1,2,3,4,5,6,7,8,9,32,50,42,88,12,44,88,37,55];
    let sum = 0;
    nums.forEach(num=>{sum+=num});
    //console.log(`Sum of all nos is : ${sum}`);
}
call();


//d.Return all the prime numbers in an array
var call = ()=>{
    const nums = [17,1,82,77,17,57,11,2,91,3,28,4,5,6,99,7,8,9,32,50,42,88,12,44,88,37,55];
    let odds = nums.filter((num)=>{
        flag = true;
        if(num==1) return num;
        for(i=2;i<=num/2;i++){
            if(num%i==0) {
                flag =false;
                return flag;
            }
        }
        if(flag)
            return num;
    });
      //console.log(odds);  
}
call();



//e.Return all palindromes in array
var call = () => {
    let numData = [321123, 876575, 121, 777, 303, 8366, 4430344, 678876];
    let ans = numData.filter(a => {
        let numData = a;
        let secNum = 0;
        while (numData > 0) {
            let a = numData % 10;
            secNum = (secNum * 10) + a;
            numData = Math.floor(numData / 10);
        }
        if (secNum == a)
            return a;
        else
            return false;

    }
    );

}
call();