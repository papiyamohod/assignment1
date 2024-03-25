//1.Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
const input=require("readline-sync")
let a=input.questionInt("number")
let b=input.questionInt("number")
let np;
np=a+b
np=a-b
np=a*b
np=a/b
np=a//b
console.log(np);

//2.Take two numbers and only print the integer part when a is divided by b. in js
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionInt("b")
let np=Math.floor(a/b);
console.log(np);

//3. Take two numbers a,b and print the exponential power of the first number raised by the second.
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionFloat("b")
let np=a**b;
console.log(np);

//4.Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionInt("b")
let np=a/b
console.log(np);

//5.Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionInt("b")
let c=input.questionInt("c")
let d=input.questionInt("d")
let np=a+b+c+d/4
console.log(np);

//6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionInt("b")
let np=a-b;
console.log(np);

//7.Take a number and print out the last digit of the number.
let input=require("readline-sync")
let a=input.questionInt("a")
let np=a/10;
console.log(np);

//9.Write a JavaScript program to find the largest of three numbers.
let input=require("readline-sync")
let a=input.questionInt("a")
let b=input.questionInt("b")
let c=input.questionInt("c")
if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}

//10. Write a JavaScript program to check whether a number is even or odd.
let input=require("readline-sync")
let n=input.questionInt("a")
if(n%2==0){
    console.log(even);
}
else{
    console.log(odd);
}
//11. Write a JavaScript program to check whether a given number is prime or not.
let input=require("readline-sync")
let n=input.questionInt("n")                                                                    // Q = 11
let i=1;
let c=0;
while(i<=n){
    if(n%i==0){
    c=c+1;
   }  i++;
   }
    if(c==2){
     console.log("prime number");
    } 
    else{
     console.log("not prime");
   }
//12.Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.
let c =35;                                                                  // Q=12
let f =(c*9/5)+32;
console.log(f);
f=95
c = (f-32)*5/9;
console.log(c);





