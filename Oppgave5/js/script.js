let outputBoxEl = document.getElementById("outputBox");
let formEl = document.getElementById("form");
// let fooditems = document.getElementById("fooditems");

let elements = document.getElementsByTagName("input");
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    elements[i].addEventListener("input", formSubmit);
}

function formSubmit(e){
    e.preventDefault;
    console.log(e);
    let data = [...new FormData(formEl)];
    outputBoxEl = "<p> "+data;
}

function newFood(e){

}