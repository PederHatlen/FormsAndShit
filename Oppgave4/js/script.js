let outputBoxEl = document.getElementById("outputBox");

function formSubmit(e) {
    let data = [...new FormData(e.target)];
    outputBoxEl.innerHTML += "<p>Jeg heter "+data[0][1]+", er "+data[1][1]+" år gammel og liker å drikke "+data[2][1];
    e.preventDefault();
}