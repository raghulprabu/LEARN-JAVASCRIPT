const datas ={
    name : "raghul",
    age : 25,
    work : "developer"
}
document.getElementById("name").innerText = datas.name;
document.getElementById("age").innerText = datas.age;
document.getElementById("work").innerText = datas.work;


//! Add a New Property in the Object

const person={
    names :"Raghul",
    ages :25
}

person.works = "Developer"; // Adding a new property

document.getElementById("names").innerText = person.names;
document.getElementById("ages").innerText = person.ages;
document.getElementById("works").innerText = person.works;

//! Delete a Property from the Object

const data ={
    role:"frontend developer",
    update :"full stack developer",
    newupdate :" deveolps and cloud and Ai developer"

}

delete person.role; // Deleting the 'ages' property
document.getElementById("update").innerText = data.update;
document.getElementById("newupdate").innerText = data.newupdate;
document.getElementById("role").innerText = data.role; // This will show 'undefined' since the property is deleted