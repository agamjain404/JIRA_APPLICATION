//pImporting filter container
let pFilterColor = null;
let allFilterElems = document.querySelectorAll(".filter-colors__container");

// loop through all filter containers
for(let i=0; i<allFilterElems.length; i++){

    // add event to every element present in filtercontianer
    allFilterElems[i].addEventListener("click", function(){
        // Get first children of filter cntainer element
        let filterColorElems = allFilterElems[i].children[0];

        // Get first member of classList of children which is stored in filterColorElems
        let ToFiltercolor = filterColorElems.classList[0];

        // Get all elements of ticket container and then remove them from UI
        let ticketArr = document.querySelectorAll(".ticket-container");
        let length = ticketArr.length;
        let reqArr;
        for(let i = 0; i<length; i++){
            ticketArr[i].remove();
        }

        // If pfilter is not null or if pfilter is equals to to be filtered color then show all boxes
        if(pFilterColor != null && pFilterColor == ToFiltercolor){
            // Show all
            reqArr = taskArr;
            pFilterColor = null;
        }else{
            // Filter the particular tickets which has color same as ToFiltercolor from localStorage and store it in reqArr
            reqArr = taskArr.filter(function(elemobj){
                return elemobj.color == ToFiltercolor;
            })
            pFilterColor = ToFiltercolor;
        }

        

        

        // Then create new tickets for every element and add them to UI
        reqArr.forEach(function(taskobj){
            let {task, color, id} = taskobj;
            createTicket(task, color, id);
        })
    })
}