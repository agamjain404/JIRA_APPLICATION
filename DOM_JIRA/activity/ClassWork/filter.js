// Importing filter container
let allFilterElems = document.querySelectorAll(".filter-colors__container");

// loop through all filter containers
for(let i=0; i<allFilterElems.length; i++){

    // add event to every element present in filtercontianer
    allFilterElems[i].addEventListener("click", function(){
        // Get first children of filter cntainer element
        let filterColorElems = allFilterElems[i].children[0];

        // Get first member of classList of children which is stored in filterColorElems
        let ToFiltercolor = filterColorElems.classList[0];

        // Filter the particular tickets which has color same as ToFiltercolor from localStorage and store it in reqArr
        let reqArr = taskArr.filter(function(elemobj){
            return elemobj.color == ToFiltercolor;
        })

        // Get all elements of ticket container and then remove them from UI
        let ticketArr = document.querySelectorAll(".ticket-container");
        let length = ticketArr.length;
        for(let i = 0; i<length; i++){
            ticketArr[i].remove();
        }

        // Then create new tickets for every element and add them to UI
        reqArr.forEach(function(taskobj){
            let {task, color, id} = taskobj;
            createTicket(task, color, id);
        })
    })
}