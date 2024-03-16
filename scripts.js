
var newStudent=document.getElementById("nstu");

newStudent.addEventListener("click",function(){
    const sname ="theo";
    const sid="111";
    const row=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText=sname;
    row.appendChild(td1);
    const td2=document.createElement("td");
    td2.innerText=sid;
    row.appendChild(td2);
    console.log(sname,sid);
    document.getElementById("table1").appendChild(row);


});
