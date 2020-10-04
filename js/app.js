var list=document.getElementById("list");
function addtodo(){
var item=document.getElementById("todo-item");

//create li
var li=document.createElement("li");
var liText=document.createTextNode(item.value);
li.appendChild(liText);

//create delete button 
var delbtn=document.createElement("button");
delbtn.setAttribute("onclick","del(this)","id","delbtn");
var btntext=document.createTextNode("Delete Item");
delbtn.appendChild(btntext);
li.appendChild(delbtn);

//create edit btn
var editbtn=document.createElement("button");
editbtn.setAttribute("onclick","edit(this)");
var editbtntext=document.createTextNode("Edit Item");
editbtn.appendChild(editbtntext);
li.appendChild(editbtn);

if(item.value!=""){
list.appendChild(li);
}
item.value="";
}

//Delete function
function del(e){
 e.parentNode.remove();
}

//Delete All function
function delall(){
    list.innerHTML="";
}

function edit(a){
    var editval=prompt("Edit according to your will ");
    a.parentNode.firstChild.nodeValue=editval;
}