function names() {
    document.getElementById("Chng").innerHTML="<b> Learning Event and Functions </b>"
}

function introduce(name, age) {

  return "My name is " + name + " and I am " + age + " years old.";
}

document.getElementById("intro").innerHTML=introduce("Raghul", 25);
