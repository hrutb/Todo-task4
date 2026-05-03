let todoArr=[ 
           { 
            todoItem:"JAVA & PYTHON",
            todoId:"asdf12-asd45-sdf12"
           },
           { 
            todoItem:"JAVA & PYTHON",
            todoId:"asdf1-asdx5-sdf12"
           },
           { 
            todoItem:"JAVA & PYTHON",
            todoId:"asdf2-qazasd45-sdf12"
           }
       ] 




const todoForm =document.getElementById('todoForm');
const todoContainer=document.getElementById('todoContainer');
const todoItemControl= document.getElementById('todoItem'); 
const cl = console.log;

function snackBar(msg){ 
          swal.fire({ 
               tit
          })
}
function createArr(arr){ 
        let result ='';
  arr.forEach(ele=>{ 
         result =`<li class="list-group-item d-flex justify-content-between" id='ele.todoId'>
                           <Strong>${ele.todoItem}</Strong>
                            <div>
                              <i  onclick="onEdit(this)" class="fa-solid fa-pen-to-square  text-primary"></i>  
                              <i onclick="onRemove(this)" class="fa-regular fa-trash-can  text-danger"></i>
                            </div>
                        </li>`
  })
  
todoContainer.innerHTML = result;

}


createArr(todoArr);


function onFormHandler(eve){
      eve.preventDefault();
      let todo_obj ={
            todoItem:todoItemControl.value,
            todoId:Date.now().toString() 
        } 
        cl(todo_obj);

   todoArr.push(todo_obj);
   //createArr(todoArr); this code will recreate  
     
let li  = document.createElement('li');
li.className=`list-group-item d-flex justify-content-between`; 
 li.id=`${todo_obj.todoId}`
li.innerHTML = `<Strong>${todo_obj.todoItem}</Strong>
                            <div>
                              <i  onclick="onEdit(this)" class="fa-solid fa-pen-to-square  text-primary"></i>  
                              <i onclick="onRemove(this)" class="fa-regular fa-trash-can  text-danger"></i>
                            </div> 
                `
let ul =document.querySelector('ul'); 
  ul.append(li);
  todoForm.reset();

}

 



function onEdit(){}










todoForm.addEventListener('submit', onFormHandler)