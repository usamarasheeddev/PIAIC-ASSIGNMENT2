// Problem No1
// - Create a function that takes an array, an index, and a value as parameters.
//  Inside the function, use the splice method to insert the value at the specified index in the array.
//   Return the modified array.

var array:number[]=[1,2,3,4,5];
var index:number=3;
var value:number=65;

function arryIndexParameter(array:number[],index:number,value:number):number[]
 {
  array.splice(index,0,value)
  return array
}
var modified:number[]=arryIndexParameter(array,index,value)
console.log(modified);

// Problem No2  Implement a simple shopping cart program using an array. Create functions to add items, 
// remove items, and update quantities using the splice method. Print the cart's contents after each operation

var cart:string[]=["Apple", "Grapes", "Orange", "Dates", " PineApple"]
function addItems(){
    cart.splice(cart.length,0,"Mangoes")
    return cart
}
console.log("Before add items to cart =",cart);
console.log("After add items to cart =",addItems());

function removeItems(){
    cart.splice(cart.length-2,1)
    return cart
}
console.log("Before remove items to cart =",cart);
console.log("Before remove items to cart =",removeItems());

function updateItems(){
    cart.splice(cart.length-3,1,"Banana")
    return cart
}
console.log("update items to cart =",cart);
console.log("Before update items to cart =",updateItems());

// Problem3
// Write a program that uses a while loop to print the first 25 integers.
var integer:number=1;
while(integer <=25){
console.log(integer);
integer=integer+1

}
// Problem4 Write a program that uses a while loop to print the first 10 even numbers.
var n:number=1;
while (n<=10) {
    if(n%2==0){
        console.log(n);
        
    }

    n++
}

// problem5 Create a function that takes a positive integer as parameter and 
// uses a while loop to calculate and return the factorial of that number.

function factorial(n:number){
    if (n<0){
        console.log("factorial is not define for negative number")}

    else if (n==0){
    console.log(1)
}
    else{

var num:number=1;
while(n>0){
    num *= n
    n -= 1
    console.log(num)
    
    }  
}

}
factorial(5)

// problem6
//  - Write a program having an array of numbers 
// if the number is negative it should remove the negative number from the array.

// function removeNegativeNum(array : number[]): number[]{
    
// return array.filter(number => number >= 0) ;   
// }
// var arrayNum : number[] = [10,12,14,-10,19,-19] ;
// var result :number[] = removeNegativeNum(arrayNum) ;

// console.log(result);


// problem7
// Create a function that takes an array of numbers as parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array.
function calculateSum(arrayToSum : number[]):number{
    let sum : number = 0 ;
    let index : number = 0 ;
  
    while(index < arrayToSum.length){
      sum += arrayToSum[index] ;
      
      index++
  }
    return sum ;
  }
  let arrayNum : number[] = [10,15,20,25,30] ;
  let result : number = calculateSum(arrayNum) ;
  console.log(result);
