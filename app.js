  
var list=document.getElementById("list")  

firebase.database().ref("Todo").on('child_added',function(data){
// console.log(data.val())
   // create text node

    var li=document.createElement("li")
    var text=document.createTextNode(data.val().Todo)
    li.appendChild(text)

    // create delete button
    
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn btn-dark")
    delbtn.setAttribute("id",data.val().key)
    delbtn.setAttribute("onclick","delItem(this)")
    delbtn.appendChild(deltext)
    
// create edit btn

    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("EDIT")
    editbtn.setAttribute("class","btn btn-info")
    editbtn.setAttribute("id",data.val().key)
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(edittext)

    li.appendChild(editbtn)

    li.appendChild(delbtn)

    list.appendChild(li)
})

function addTodo(){
    var todoItem=document.getElementById("todo-Item")

    var key= firebase.database().ref("Todo").push(student).key
    var student = {
        Todo:todoItem.value,
        key:key
    }
    firebase.database().ref("Todo/"+key).set(student)
    console.log(key)
    todoItem.value=""
}


function delItem(e){ 
    firebase.database().ref("Todo").child(e.id).remove()
    e.parentNode.remove()
  
}

function allDel(){
    list.innerHTML=""
    firebase.database().ref("Todo").remove()

}

function editItem(e){
    var val=prompt("Enter a New Value",e.parentNode.firstChild.nodeValue=val)
    var editTodo={
        value:val,
        key:e.id
    }
    firebase.database().ref("Todo").child(e.id).set(editTodo)
e.parentNode.firstChild.nodeValue=val;

}
