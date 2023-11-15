const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){                                               //if input field is empty
    if(inputBox === ''){
        alert("Write something in the given field")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;                            //incorporating the task in li element
        listContainer.appendChild(li);                            //showing the added task in listContainer div
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"                                 //creating cross
        li.appendChild(span);                                     //showing the cross beside each task
    }

    inputBox.value='';                                            //to empty the input field after adding the task
}

listContainer.addEventListener("click",function(e){               //adding click event listener and creaating e function  to check whether task is clicked or cross is clicked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
});