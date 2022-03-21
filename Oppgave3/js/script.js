let outputBoxEl = document.getElementById("outputBox");

function formSubmit(e){
    let fData = new FormData(e.target);
    let data = [...fData.entries()];
    console.log("Hei", data[0][1], "Du er", data[1][1], "år gammel.");
    outputBoxEl.innerHTML += "<p>Jeg heter "+data[0][1]+", og er "+data[1][1]+" år gammel.</p>";
    e.preventDefault();
}