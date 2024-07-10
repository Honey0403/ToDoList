const addbtn = document.querySelector("#add-btn")
const newTaskInput= document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error= document.querySelector("#error");
const countvalue= document.querySelector(".count-value");

let taskcount=0;


const displaycount=(taskcount) => {
    countvalue.innerText = taskcount;
    
}
const addtask =() => {
    const taskname= newTaskInput.value;

    
    error.style.display="none";
    if(!taskname){
        setTimeout(() => {
            error.style.display="block";
        }, 200);
        return;
    }
    
    const task= `<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname"> ${taskname} </span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`;
    tasksContainer.insertAdjacentHTML("beforeend",task)
    const deletebuttons = document.querySelectorAll(".delete");
    deletebuttons.forEach((button) => {
        button.onclick= () => {
            button.parentNode.remove();
            taskcount -=1;
            displaycount(taskcount);
            
        }
    });

    const editbuttons=document.querySelectorAll(".edit");
    editbuttons.forEach((editbtn)=>{
        editbtn.onclick=(e) => {
            let targetelement=e.target;
            console.log(targetelement)
            if(!(e.target.className == "edit")){
                targetelement=e.target.parentElement;
            }
                newTaskInput.value = targetelement.previousElementSibling?.innerText;
                targetelement.parentNode.remove();
                taskcount-=1;
                displaycount(taskcount);
            
        }
        

    })
    const taskscheck=document.querySelectorAll(".task-check")
    taskscheck.forEach((checkBox) => {
        checkBox.onchange=() => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if(checkBox.checked){
                taskcount-=1;
            }
            else
            {taskcount+=1}
            displaycount(taskcount); 
        }
        
    })
    taskcount+=1;
        displaycount(taskcount)
        newTaskInput.value="";

    }


addbtn.addEventListener("click",addtask)
newTaskInput.addEventListener("keydown",(event)=>{
    if(event.key==='Enter'){addtask()}
    
})
window.onload=  () => {
    taskcount=0;
    displaycount(taskcount)
    newTaskInput.value=""
    
}



