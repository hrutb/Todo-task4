let todoArr=[ 
           { 
            todoItem:"LESS & PYTHON",
            todoId:"asdf12-asd45-sdf12"
           },
           { 
            todoItem:"CSS & SASS",
            todoId:"asdf1-asdx5-sdf12"
           },
           { 
            todoItem:"JS and TS",
            todoId:"asdf2-qazasd45-sdf12"
           }
       ] 




const todoForm =document.getElementById('todoForm');
const todoContainer=document.getElementById('todoContainer');
const todoItemControl= document.getElementById('todoItem'); 
const updateTodo =document.getElementById('updateTodo');
const cl = console.log;




function snackBar(msg){ 
          swal.fire({ 
               title:msg,
               timer:2000,
               icon:'success'  
              })
}


function createArr(arr){ 
        let result ='';
  arr.forEach(ele=>{ 
         result =`<li class="list-group-item d-flex justify-content-between" id='${ele.todoId}'>
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

 
function onRemove(ele){ 
       cl(ele) //this will select html element it will give <i> 
   let remove_id= ele.closest('li').id;
   let getIndex =todoArr.findIndex(ele=>ele.todoId===remove_id)
       todoArr.splice(getIndex,1);
  
 ele.closest('li').remove();      
} 


let Edit_id
function onEdit(ele){
       
       //get id present on li  
   Edit_id = ele.closest('li').id;

      //find object of that id 
 let Edit_obj = todoArr.find(ele=>ele.todoId ===Edit_id); 
     todoItemControl.value = Edit_obj.todoItem;  
 addTodo.classList.add('d-none');
  updateTodo.classList.remove('d-none');
}


function onUpdate(ele){ 
      let updated_obj ={ 
               todoItem:todoItemControl.value,
               todoId:Edit_id    
          }
  
     let updated_id = Edit_id;
     let getIndex=todoArr.findIndex(ele=>ele.todoId===updated_id) 
      
      //set updated value in array
     todoArr[getIndex]=updated_obj.todoItem ; 
   
     //update value on UI
     let li =document.getElementById(updated_id).firstElementChild; 
     li.innerText= updated_obj.todoItem; 
  
     todoForm.reset(); 
   
     addTodo.classList.remove('d-none');
     updateTodo.classList.add('d-none');

     snackBar('Todo item is  updated successfully');

}







todoForm.addEventListener('submit', onFormHandler); 
updateTodo.addEventListener('click', onUpdate);