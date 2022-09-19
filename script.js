'use strict'

const btnInput = document.querySelector('#btngiris');
const toDoInput = document.querySelector('#textalani');
const toDoList = document.querySelector('.to-lists');

btnInput.addEventListener('click', addToDo);
toDoList.addEventListener('click', lineToDo)
function addToDo(){
    var todo = toDoInput.value;
  
    if (todo == "") {
        
            // Get the snackbar DIV
            var x = document.getElementById("snackbar");
          
            // Add the "show" class to DIV
            x.className = "show";
          
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          
    } else {
        let li = document.createElement('li');
        li.classList.add('li-todo');
        li.innerHTML = `<p class="p-todo"> ${todo} </p> <button class="btnDelete" id="btnsil"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg> Sil</button> ` ;
        toDoList.appendChild(li);
        toDoInput.value = "";

        var current_tasks = document.querySelectorAll("#btnsil");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].addEventListener ('click',function(){
                this.parentNode.remove();
            }) ;
        }
    }
}
function lineToDo(e){
    if(e.target.tagName == 'P'){
        e.target.classList.toggle('ciz');
    }
}

