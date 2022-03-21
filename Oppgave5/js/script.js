let formEl = document.getElementById("form");
let newFoodFormEl = document.getElementById("newFoodForm");
let fooditemsEl = document.getElementById("fooditems");
let newFoodEl = document.getElementById("newFood"); 	// add new food 

let outputBoxEl = document.getElementById("outputBox");	// the box where the output will go

let inputEls = formEl.getElementsByTagName("input");	// all input ellements

// Looping throught all input ellements and adding a oninput eventlistener (for when the ellement is changed)
for (let i = 0; i < inputEls.length; i++) { inputEls[i].addEventListener("input", makeString); }

// Main function for retrieving all the information from the form
function makeString(e) {
	let fData = new FormData(formEl); // Data is retrieved with FormData, which generates a post-like request with data

	// All data is generated with ternary operators, not so clean, but it works
	let name = (fData.get("name") != "" ? "Jeg heter " + fData.get("name") + "." : "");
	let age = (fData.get("age") != "" ? "Jeg er " + fData.get("age") + " år gammel." : "");
	let drink = (fData.get("drink") != null ? "Min favoritt drikke er " + fData.get("drink") + "." : "");

	// Food is different
	// Everything is put into an array and formated 
	let foodarray = fData.getAll("food");
	let food = "";

	// If the length is more than 1 make a list and format it, else if 1 just print food.
	if (foodarray.length > 1) {
		food = "Noen matretter jeg liker er " + foodarray.slice(0, -1).join(", ") + " og " + foodarray.slice(-1) + ". ";
	} else if (foodarray.length == 1) {
		food = "Jeg liker " + foodarray + ".";
	}

	// Outputing
	outputBoxEl.innerHTML = "<p>"+[name,age,drink,food].join(" ")+"</p>";
}

// Making a new fooditem
newFoodFormEl.addEventListener("submit", newFoodFunc);
function newFoodFunc(e) {
	e.preventDefault();
	let x = newFoodEl.value;
	fooditemsEl.innerHTML += "<label for=\"" + x + "\">" + x + "</label><input type=\"checkbox\" name=\"food\" id=\"food" + x + "\" value=\"" + x + "\" onClick=\"makeString(event)\">";
}