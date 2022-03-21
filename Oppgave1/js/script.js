function formSubmit(e, retrive = null){
    let fData = new FormData(e.target);
    console.log("Hei "+fData.get(retrive));
    e.preventDefault();
}