let outputBoxEl = document.getElementById("outputBox");

function formSubmit(e, retrive = null){
    let fData = new FormData(e.target);
    console.log("Hei "+fData.get(retrive));
    outputBoxEl.innerHTML += "<p>Hei "+ fData.get(retrive) +"</p>";
    e.preventDefault();
}