1.Write a function to calculate the sum of all elements in an array of integers
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}
const array = [1, 2, 3, 4, 5];
console.log(sum(array));

2.Write a function to calculate the average of all elements in an array of integers. 
const Average = (salari) => {
    let total = 0;
    for (let i = 0; i < salari.length; i++) {
        totalSalary += salari[i];
    }
    return total / salari.length;
};
const salari = [1100, 1200, 1300, 1400, 1500];
console.log(Average(salari));

3.Write a function to find the maximum element in an array of integers.
let arr=[10,20,30,40,50,60];
max=arr[0];
for (let i=0; i<arr.length; i++){
     if (max>arr[i]){
         max=max
     }
     else{
         max=arr[i]
     }
 }
 console.log(max);

4.Write a function to find the manimum element in an array of integers.
let arr=[100,200,300,400,500,600];
min=arr[0];
for (let i=0; i<arr.length; i++){
     if (min<arr[i]){
         min=min
     }
     else{
        min=arr[i]
    }
 }
 console.log(min);

 5.Write a function to search for a given element in an array and return its index if found, otherwise return -1.
  let arr=[1,2,3,4,5];
  if (arr.includes(5)){
  let user=arr.indexOf(5)
  console.log(user);
  }
  else{
     console.log("-1");
 }


6.function even(arr) {
    return arr.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const np = even(numbers);
console.log(np);

7.Write a function to sort an array of integers in non-decreasing order (ascending).
let arr=[8,4,7,5,100];
arr.sort(function(a,b){
    return a-b;
 })
 console.log(arr);


