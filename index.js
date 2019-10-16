
const form= document.querySelector('.frm');
const btn= document.querySelector('.button');
const list= document.querySelector('ul');

function add(event){
    event.preventDefault();
    const item = document.querySelector('.input');
    if(item.value === ""){
        item.focus();     
    }
    else{
    const li = document.createElement('li');
    li.textContent= item.value;
    list.appendChild(li);
    let dlt = document.createElement('button');
    dlt.textContent='Delete';
    li.appendChild(dlt);
    item.value='';
    item.focus();    
    event.preventDefault();
    dlt.addEventListener('click', function(){
        list.removeChild(li);
        item.focus();    
    })  
}
}


form.addEventListener('submit', add);
