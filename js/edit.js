let value
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    value=JSON.parse(localStorage.getItem(id))
}