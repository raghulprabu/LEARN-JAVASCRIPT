//?     Array
const number =[20,30,40,50,60,];
console.table(number);


//! ForEach Method Example// This code demonstrates the use of the forEach method on an array.
// It iterates over each element in the array and logs the item, its index, and the entire array to the console.

const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(item, index, array) {
  console.table("Item:", item);       // current fruit (it will take currect values and its is default)
   console.table("Index:", index);     // index of current fruit   (it will take index number eg: 0,1,2)
   console.table("Array:", array);     // full fruits array
  console.log("--------");
});


const people = [
  { fullName: "Raghul P", age: 25, work: "Frontend Developer" },
  { fullName: "Sita Raman", age: 22, work: "UI/UX Designer" },
  { fullName: "Arjun Kumar", age: 30, work: "Backend Developer" },
  { fullName: "Priya Sharma", age: 27, work: "QA Engineer" },
  { fullName: "Kiran Mehta", age: 35, work: "Project Manager" }
];
people.forEach((values) => {
    console.table("Full Name:", values.fullName);
    console.table("Age:", values.age);
    console.table("Work:", values.work);
})



//! Map Method Example


const users = [
  { name: "Raghul", age: 25 },
  { name: "Sita", age: 22 },
  { name: "Arjun", age: 30 }
];

const names = users.map(user => user.name);
console.table(names); // ["Raghul", "Sita", "Arjun"]


//! Filter Method Example

const data = [
  { name: "Raghul", active: true },
  { name: "Sita", active: false },
  { name: "Arjun", active: true }
];

const activeUsers = data.filter(data => data.active);
console.table(activeUsers);


//!  Reducer

// accumulator → stores the accumulated result (required)
// currentValue → current array element (required)


const cart = [
  { item: "Laptop", price: 800 },
  { item: "Phone", price: 500 },
  { item: "Tablet", price: 300 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log(totalPrice); // 1600


//!  Some Method Example

const usersss = [
  { name: "Raghul", age: 25 },
  { name: "Sita", age: 16 }, // under 18
  { name: "Arjun", age: 30 }
];

const allAdultss = usersss.every(user => user.age >= 18);

console.log(allAdultss); // false




//? every

// ✅ Returns true → if all elements pass the condition

// ❌ Returns false → if any one element fails the condition

// ✅ Does not change the original array

const userss = [
  { name: "Raghul", age: 25 },
  { name: "Sita", age: 22 },
  { name: "Arjun", age: 30 }
];

const allAdults = userss.every(user => user.age >= 18);

console.log(allAdults); // true

// Spered operator

const fruitss = ["apple", "banana"];
const vegetables = ["carrot", "potato"];

const food = [...fruits, ...vegetables];

console.log(food); // ["apple", "banana", "carrot", "potato"]






