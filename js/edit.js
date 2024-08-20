let value;
function edit(){
    const urlParams=new URLSearchParams(window.location.search);
    id=urlParams.get("id");
    console.log(id);
    
    value=JSON.parse(localStorage.getItem(id));
    document.getElementById("body").innerHTML=`
     <table>
        <h1 style="text-align: center;margin-top: 3%; color:white;">EDIT DETAILS</h1>
        <tr>
          <td><label for="empid">EMPID</label></td>
          <td><input type="text" name="" id="empid"> </td>
        </tr>
        <tr>
          <td><label for="name">NAME</label></td>
          <td><input type="text" name="" id="name" value="${value.name}"></td>
        </tr>
        <tr>
          <td><label for="designation">DESIGNATION</label></td>
          <td><input type="text" name="" id="designation" value="${value.designation}"></td>
        </tr>
        <tr>
          <td><label for="salary">SALARY</label></td>
          <td><input type="text" name="" id="salary" value="${value.salary}"></td>
        </tr>
        <tr>
          <td><label for="experience">EXPERIENCE</label></td>
          <td><input type="text" name="" id="experience" value="${value.experience}"></td>
        </tr>
        <tr>
          <td><button class="bt2"  onclick="editData()">SUBMIT</button></td>
        </tr>
      </table>   `
}
edit()
function editData(){
    a={};
    console.log(value.empid);
    a.empid=value.empid;
    a.name = document.getElementById("name").value;
    a.designation= document.getElementById("designation").value;
    a.salary=document.getElementById("salary").value;
    a.experience=document.getElementById("experience").value;  
    localStorage.setItem(value.empid, JSON.stringify(a));
    window.location.href="../index.html";
}