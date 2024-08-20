function fetchData(){
if(localStorage.length==0){
    document.getElementById("table").innerHTML= `<h2>No Employees Added</h2><a href="./html/addemp.html">Add Employee Here</a>`;
}
else{
    str=``
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const value=JSON.parse(localStorage.getItem(key))
        console.log(value.name);

        str+= `<tr class="table-active">
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button type="button" class="btn btn-outline-danger me-2">Edit</button><button type="button" class="btn btn-outline-success">Delete</button></td>
  </tr>
  
        `
    }

}
}
fetchData()