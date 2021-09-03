"use stirct"

//🍀
const titleInput = document.querySelector('.title_input');
const noteInput = document.querySelector('.note_input');
const noteAlert = document.querySelector('.note_alert');

const submitBtn = document.querySelector('.submit');
const clearAllBtn = document.querySelector('.clear_all');

const noteNew = document.querySelector('#note_new');
const modalDetailNew = document.querySelector('#modal_detail_new');

const modalDetailContainer = document.querySelector('.modal_detail_container');
const modalTitle = document.querySelector('.modal_title');
const modalContent = document.querySelector('.modal_content');
const modalDelete = document.querySelector('.modal_delete');


/* 🍄Al
0 class
1 domcontentload, focu
2  submit-title, 
2-2 note -create
3 save local storage : so that I can use the dat for detail div
4 click btn in create note - detal, delet
6 click detail btn created, show whole note
8 delete parent node
10 create delete btn in detal modal and hide the modal
clear all btn

*/

// js 1 domcontent loaded

document.addEventListener("DomContentLoaded", () => {
    titleInput.focus();
});


// js 2 title,  note - create

submitBtn.addEventListener("click", run_first);

function run_first(e) {
    e.preventDefault();

    noteAlert.innerHTML='';

    /*🦄 way 2 :  if (titleInput.value && noteInput.value)  : value가 존재해서 true */
    if(titleInput.value && noteInput.value ){
        run();
    }else{
        noteAlert.innerHTML='fill the title or note please';
    }
}


function run(e) {
    titleInput.focus();

    // js 0

    let newNote = new Note(titleInput.value, noteInput.value);
    console.log(newNote);

    addNoteToList(newNote);

    titleInput.value="";
    noteInput.value="";

    
}

// js 0 class, math.floor. math.random*8000, classobject id

class Note {
    constructor(p_a, p_b) {
        
        this.title = p_a;
        this.body = p_b;
        this.id = Math.floor(Math.random() * 1000);
        console.log(this.id);
    }
}

function addNoteToList(a_newNote) {

    let note = document.createElement("div");
    note.classList.add("note_new_container");
    noteNew.append(note);
    

    // .substrint;

    note.innerHTML=`
        <span hidden >${a_newNote.id}</span>
        <h2 class="note_title">${a_newNote.title.substring(0,20)}</h2> 
        <div class="note_content">${a_newNote.body.substring(0,30)}</div>
        <button class="myButton2 detail">view detail</button>
        <button class="myButton2 delete">delete</button>   
    `;

    // note_new: event bubbling , e.target btn

    console.log(a_newNote);

    noteNew.addEventListener("click",(e)=>{

        // js 8 click deletebtn

        if(e.target.classList.contain('delete')){
            e.target.parentNote.remove();
            modalDetailContainer.classList.remove("move_show");
        }

        if(e.target.classList.contain('detail')){
            activeModal(a_newNote);
            modalDetailContainer.classList.add("modal_show");

        }
    });
}


function activeModal(a_newNote) {
    
}





