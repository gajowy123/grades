
var newStudent=document.getElementById("nstu");
var changeGrade=document.getElementById("cgt");
var stidn=0;
var rn=0;
var grtp=0;
const fts=["Adam Smith", "John Doe", "Kate Bush", "Kayah Rooijens", "Newt Simmons", "Lloyd Winters", "Fyodor Chistyakov", "Jim Bloggs", "Cory Doctorow", "Kari Byron"];
const fti=["0000","1111","2222","3333","4444","5555","6666","7777","8888","9999"];
const ntl=['a','b','c','d','e'];

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

newStudent.addEventListener("click",createNewRow);

changeGrade.addEventListener("click",changeMrk)
function onl(){
    for(let i=0;i<10;i++){
        createNewRow();
    }
   
}


function isvalid(n){
    var b=document.getElementById(n);
    if(parseInt(b.value)>=0 & parseInt(b.value)<=100){
        b.value=parseInt(b.value);
        console.log(parseInt(b.value));
        calAvg(b.name);
        b.classList.remove("unsb");
        b.classList.add("bsmb");
    }
    else{
        b.value=null;
        b.classList.remove("bsmb");
        b.classList.add("unsb");
    }
}


function aatr1(n){
    //n.setAttribute("type","number");
    n.setAttribute("min","0");
    n.setAttribute("max","100");
    n.setAttribute("maxlength","5");
    n.setAttribute("size","6");
    n.setAttribute("placeholder","-");
    n.setAttribute("step","1");
    n.setAttribute("name",stidn);
    n.setAttribute("id",stidn+ntl[rn]);rn=(rn+1)%5;
    n.setAttribute("onchange","isvalid(this.id)");
    n.classList.add("unsb")
    //n.oninput=validity.valid||(value='');   

}

function createNewRow(){
    var pn;
    var pi;
    if(stidn<10){
        pn=fts[stidn];
        pi=fti[stidn];
    }else{
        pn =document.getElementById("name").value;
        pi=document.getElementById("id").value;
    }
    const sname=pn;
    const sid=pi;
    const row=document.createElement("tr");
    const td1=document.createElement("td");
    
    td1.innerText=sname;
    row.appendChild(td1);
    const td2=document.createElement("td");
    td2.innerText=sid;
    row.appendChild(td2);
    //console.log(sname,sid);
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
    document.getElementById("table1").appendChild(row);
}

function calAvg(n){
    var b=document.getElementsByName(n);
    var tot=0;
    for(let i=0;i<5;i++){
        if(isNaN(parseInt(b[i].value)) | parseInt(b[i].value)>100 | parseInt(b[i].value)<0){
            //console.log(n+ntl[i]);
        }else{
            tot+=parseInt(b[i].value);
        }
    }
    finGrade(n,tot);
}

function changeMrk(){
    grtp=(grtp+1)%3;
    for(let i=0;i<stidn;i++){
        calAvg(i);
    }
    if(grtp==0){
    document.getElementById("agt").innerText="[%]";
    }else if(grtp==1){
        document.getElementById("agt").innerText="[Letter]";
    }else{
        document.getElementById("agt").innerText="[4.0]";
    }
    

}

function drawMrk(n,m){
    if(grtp==0){
    document.getElementById(n+"f").innerText=m+"%";
    }
    else{
        var gtg=["",""];
        switch(true){
            case m>92: gtg=["A","4.0"];break;
            case m>89: gtg=["A-","3.7"];break;
            case m>86: gtg=["B+","3.3"];break;
            case m>82: gtg=["B","3.0"];break;
            case m>79: gtg=["B-","2.7"];break;
            case m>76: gtg=["C+","2.3"];break;
            case m>72: gtg=["C","2.0"];break;
            case m>69: gtg=["C-","1.7"];break;
            case m>66: gtg=["D+","1.3"];break;
            case m>62: gtg=["D","1.0"];break;
            case m>59: gtg=["D-","0.7"];break;
            default:gtg=["F","0.0"];break;

        }
        if(grtp==1){
            document.getElementById(n+"f").innerText=gtg[0];
        }else{
            document.getElementById(n+"f").innerText=gtg[1];
        }
    }
    
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
    drawMrk(n,tot);
}


