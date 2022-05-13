let items =[];
const form = document.getElementById('to-do-form');
const input = document.getElementById('form-control');
const errorElement =document.getElementById('error-text');
const list = document.getElementById('to-do-list');


function addActions(item){
    allItem = list.querySelectorAll(".to-do-list-item");
    /*add done action*/
    allItem.forEach(function(theItem){
        if(theItem.querySelector(".time-title").textContent===item){
            theItem.querySelector(".don-action").addEventListener("click",
            function(){
                theItem.querySelector(".don-action").classList.toggle("clicked-don-action")
                theItem.querySelector(".time-title").classList.toggle("done")
            });

            theItem.querySelector(".remove-action").addEventListener("click",
            function(){
                list.removeChild(theItem);
                items=items.filter(function(itemName){
                    item !==itemName;
                });
            });
        };
    });
}

function setItems(itemlist){
    list.innerHTML="";
    itemlist.forEach(function(item){
        list.insertAdjacentHTML("beforeend" ,
        ` <li class="to-do-list-item">
        <p class="time-title">${item}</p>
        <div class="to-do-action">
            <div class="don-action"><i class="far fa-check-circle"></i></div>
            <div class="remove-action"><i class="fas fa-minus-circle"></i></div>
        </div>
    </li>`);
    addActions(item)
    });
}

form.addEventListener('submit' ,function(e){
    e.preventDefault();
    const currentItem = input.value;
    if(currentItem && currentItem.length > 0){
        if(items.includes(currentItem)){
            errorElement.innerText="This task has already added!";
            setTimeout(function(){
                errorElement.innerText="";
            }, 3000 );
            return;
        }
        items.push(currentItem);
        setItems(items);
        input.value ="";
        console.log(items);
        return;
    }
    errorElement.innerText="This filed is required!"
    setTimeout(function(){
        errorElement.innerText="";
    }, 3000 );
});