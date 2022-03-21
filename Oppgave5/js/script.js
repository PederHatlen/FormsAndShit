let outputBoxEl = document.getElementById("outputBox");
let formEl = document.getElementById("form");
let fooditemsEl = document.getElementById("fooditems");
let newFoodEl = document.getElementById("newFood");

let elements = formEl.getElementsByTagName("input");
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    elements[i].addEventListener("input", makeString);
}

function makeString(e){
    // e.preventDefault;
    let fData = new FormData(formEl);
    let data = [...fData];
    console.log(e,data);
    
    let name = (fData.get("name") != ""? "Jeg heter "+fData.get("name")+". ":"");
    let age = (fData.get("age") != ""? "Jeg er "+fData.get("age")+" år gammel. ":"");
    let drink = (fData.get("drink") != null? "Min favoritt drikke er "+fData.get("drink")+". ":"");
    let foodarray = fData.getAll("food");
    let food = "";

    if(foodarray.length > 1){
        food = "Noen matretter jeg liker er "+foodarray.slice(0, -1).join(", ")+" og "+foodarray.slice(-1)+". ";
        console.log(food);
    }else if(foodarray.length == 1){
        food = "Jeg liker "+foodarray+". "
    }

    outputBoxEl.innerHTML = "<p>"+name+age+drink+food+"</p>";
}

function newFood(e){
    console.log(e);
    fooditemsEl.innerHTML += "<label for=\""+newFoodEl.value+"\">"+newFoodEl.value+"</label><input type=\"checkbox\" name=\"food\" id=\"food"+newFoodEl.value+"\" value=\""+newFoodEl.value+"\" onClick=\"makeString(event)\">";
}