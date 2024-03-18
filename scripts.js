
var newStudent=document.getElementById("nstu");
var stidn=10;
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

newStudent.addEventListener("click",function(){
    
    const sname =document.getElementById("name").value;
    const sid=document.getElementById("id").value;
    const row=document.createElement("tr");
    const td1=document.createElement("td");
    
    td1.innerText=sname;
    row.appendChild(td1);
    const td2=document.createElement("td");
    td2.innerText=sid;
    row.appendChild(td2);
    console.log(sname,sid);
    const td3=document.createElement("td");
    const ind=document.createElement("input");
    aatr1(ind);
    //ind.classList.add("ini");                         add class to element
    //ind.classList.remove("ini");
    //ind.setAttribute("contenteditable","true");
    
    td3.appendChild(ind);
    row.appendChild(td3);
    const cl1=td3.cloneNode(true);
    const cl2=td3.cloneNode(true);
    const cl3=td3.cloneNode(true);
    const cl4=td3.cloneNode(true);
    const cl5=td3.cloneNode(true);
    row.appendChild(cl1);
    row.appendChild(cl2);
    row.appendChild(cl3);
    row.appendChild(cl4);

    row.appendChild(cl5);
    
    
    //gradet.setAttribute("contenteditable","true");
    document.getElementById("table1").appendChild(row);


});

function isval(m){
    
}

function aatr1(n){
    n.setAttribute("type","number");
    n.setAttribute("min","0");
    n.setAttribute("max","100");
    n.setAttribute("maxlength","3");
    n.setAttribute("size","6");
    n.setAttribute("placeholder","-");
    n.setAttribute("step","1");
    
    //n.oninput=validity.valid||(value='');   

}
