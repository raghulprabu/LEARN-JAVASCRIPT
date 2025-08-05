//! Object Methods 

const person = {
    name: "raghul",
    age: 25,
    work: "developer",
    greate: function () {
        return "hello " + this.name

    }
}

document.getElementById("names").innerText = person.greate()


//!  Using Object constructor method using 

function Bio(name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;

    this.data = function () {
        return "hello " + this.name + ", you are " + this.age + " years old and work as a " + this.work;
    }
}
const person1 = new Bio("Raghul", 25, "Developer");
const person2 = new Bio("Jane", 30, "Designer");

document.getElementById("person1").innerText = person1.data();
document.getElementById("person2").innerText = person2.data();
document.getElementById("total").innerText = person1.data() + " | " + person2.data();
