  
var list=document.getElementById("list")  

function addTodo(){
    var todoItem=document.getElementById("todo-Item")

    //create text node

    var li=document.createElement("li")
    var text=document.createTextNode(todoItem.value)
    li.appendChild(text)

    // create delete button
    
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("DELETE")
delbtn.setAttribute("class","btn btn-dark")
    delbtn.setAttribute("onclick","delItem(this)")
    delbtn.appendChild(deltext)
    
// create edit btn

    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("EDIT")
editbtn.setAttribute("class","btn btn-info")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(edittext)

    li.appendChild(editbtn)

    li.appendChild(delbtn)

    list.appendChild(li)
    todoItem.value=""
}

function delItem(e){
e.parentNode.remove()
}

function allDel(){
    list.innerHTML=""
}

function editItem(e){
    var val=prompt("Enter a New Value",e.parentNode.firstChild.nodeValue=val)
e.parentNode.firstChild.nodeValue=val;
}