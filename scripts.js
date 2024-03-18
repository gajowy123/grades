
var newStudent=document.getElementById("nstu");
var stidn=10;
var rn=0;
const ntl=['a','b','c','d','e'];
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

newStudent.addEventListener("click",createNewRow);



function calAvg(n){
    var b=document.getElementsByName(n);
    var tot=0;
    for(let i=0;i<5;i++){
        if(isNaN(parseInt(b[i].value)) | parseInt(b[i].value)>100 | parseInt(b[i].value)<0){
            console.log(n+ntl[i]);
            document.getElementById(n+ntl[i]).innerText="";     //doesnt work
        }else{
            tot+=parseInt(b[i].value);
        }
    }
    finGrade(n,tot);
    
    //console.log(tot);
}

function aatr1(n){
    //n.setAttribute("type","number");
    n.setAttribute("min","0");
    n.setAttribute("max","100");
    n.setAttribute("maxlength","3");
    n.setAttribute("size","6");
    n.setAttribute("placeholder","-");
    n.setAttribute("step","1");
    n.setAttribute("name",stidn);
    n.setAttribute("id",stidn+ntl[rn]);rn=(rn+1)%5;
    n.setAttribute("onchange","calAvg(this.name)");
    //n.oninput=validity.valid||(value='');   

}

function createNewRow(){
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
    const tde0=document.createElement("td");
    const tde1=document.createElement("td");
    const tde2=document.createElement("td");
    const tde3=document.createElement("td");
    const tde4=document.createElement("td");
    const ind0=document.createElement("input");
    const ind1=document.createElement("input");
    const ind2=document.createElement("input");
    const ind3=document.createElement("input");
    const ind4=document.createElement("input");
    aatr1(ind0);aatr1(ind1);aatr1(ind2);aatr1(ind3);aatr1(ind4);
    //ind.classList.add("ini");                         add class to element
    //ind.classList.remove("ini");
    //ind.setAttribute("contenteditable","true");
    tde0.appendChild(ind0);tde1.appendChild(ind1);tde2.appendChild(ind2);
    tde3.appendChild(ind3);tde4.appendChild(ind4);
    
    row.appendChild(tde0);
    row.appendChild(tde1);
    row.appendChild(tde2);
    row.appendChild(tde3);
    row.appendChild(tde4);
    const td4=document.createElement("td");
    td4.innerText="-"; 
    td4.setAttribute("id",stidn+"f");
    td4.classList.add("ovrs");
    row.appendChild(td4);
    stidn++;
    
    
    //gradet.setAttribute("contenteditable","true");
    document.getElementById("table1").appendChild(row);

}

function changeMrk(){

}

function finGrade(n,t){
    var tot=t/5;
    if(tot<60){
        document.getElementById(n+"f").classList.remove("ovrs");
        document.getElementById(n+"f").classList.add("unds");
    }
    else{
        document.getElementById(n+"f").classList.remove("unds");
        document.getElementById(n+"f").classList.add("ovrs");
    }
    document.getElementById(n+"f").innerText=t/5+"%";
}