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
        <th scope="row">${value.empid}</th>
        <td>${value.name}</td>
        <td>${value.designation}</td>
        <td>${value.salary}</td>
        <td>${value.experience}</td>
        <td><a href="./html/edit.html?id=${value.empid}"><button type="button" class="btn btn-outline-danger me-2">Edit</button></a>
        <button type="button" class="btn btn-outline-success" onclick="deleteemp('${value.empid}')">Delete</button></td>
  </tr>`
  document.getElementById("tbody").innerHTML=str
    }

}
}
fetchData()

function deleteemp(i){
    console.log(i);
    
    if (confirm("Do you want to delete the employ details")) {
        localStorage.removeItem(i);
        fetchData();
      } else {
        alert("Cancelled Deleting")
      }
}

document.getElementById("filter").addEventListener('keyup',(e)=>{
   
  str=``;
  for(i=0;i<localStorage.length;i++){
      const key=localStorage.key(i);
      const value=JSON.parse(localStorage.getItem(key));
      if(value.name.toLowerCase().includes(e.target.value.toLowerCase())){
          str+=`<tr class="table-active">
        <th scope="row">${value.empid}</th>
        <td>${value.name}</td>
        <td>${value.designation}</td>
        <td>${value.salary}</td>
        <td>${value.experience}</td>
        <td><a href="./html/edit.html?id=${value.empid}"><button type="button" class="btn btn-outline-danger me-2">Edit</button></a>
        <button type="button" class="btn btn-outline-success" onclick="deleteemp('${value.empid}')">Delete</button></td>
  </tr>`
      }
      else{
        console.log(value);
        
          str=`<tr>
          <td colspan="6"><h3>No such employee</h3></td>
        </tr>`
      }
      
  }
  document.getElementById("tbody").innerHTML=str;
})