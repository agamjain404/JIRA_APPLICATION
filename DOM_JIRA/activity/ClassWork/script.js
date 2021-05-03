let filterOptions = document.querySelectorAll(".filter-colors__container");
let modalFilters = document.querySelectorAll(".modal_filter");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".remove");
let descBox = document.querySelector(".desc-box");
let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let flag = false;
let deleteState = false;
let cColor = colors[colors.length - 1];

for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener("click", function () {
        let arr = filterOptions[i].children;
        // present classes
        // console.log(arr[1]);
        let chclassesArr = arr[0].classList;

        // console.log(classesArr[1]);
        mainContainer.style.backgroundColor = chclassesArr[0];
    });
}



addBtn.addEventListener("click", function () {
    if (flag == false) {
        modalContainer.style.display = "flex";
    } else {
        modalContainer.style.display = "none";
    }
    flag = !flag
})
for (let i = 0; i < modalFilters.length; i++) {
    modalFilters[i].addEventListener("click", function () {
        modalFilters.forEach(function (modalFilter) {
            // classList remove-> 
            modalFilter.classList.remove("border");
        })
        modalFilters[i].classList.add("border");
        cColor = modalFilters[i].classList[1];
    })
}
descBox.addEventListener("keydown", function (e) {

    if (e.key == "Enter") {
        let task = descBox.value;
        // console.log("task is ", task, "cColor ", cColor);
        // tiket create 
        // ticket create 
        //  clean up 
        createTicket(task, cColor);
        cColor = colors[colors.length - 1];
        modalContainer.style.display = "none";
        flag = false;
        descBox.value = "";
    }
})

function createTicket(task, cColor){
    let ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-container");
    ticketContainer.innerHTML= ` <div class="ticket-color ${cColor}"></div>
            <div class="ticket_sub-container">
                <h3 class="ticket-id">#SampleId</h3>
                <p class="ticket-desc">${task}</p>
            </div>`;
    mainContainer.appendChild(ticketContainer);
    handleticketColorContainer(ticketContainer);
    handleticketDeleteContainer(ticketContainer);
}

function handleticketColorContainer(ticketContainer){
    // All Nodes also has document functions so
    let colorStripElement = ticketContainer.querySelector(".ticket-color");
    colorStripElement.addEventListener("click", function(){
        let classes = colorStripElement.classList;
        let initColor = classes[1];
        let idx = colors.indexOf(initColor);
        let newidx =(idx+1)%4;
        let newColor = colors[newidx];
        colorStripElement.classList.remove(initColor);
        colorStripElement.classList.add(newColor);
    })
}


removeBtn.addEventListener("click", function () {
    if(deleteState == false){
        removeBtn.style.backgroundColor = "rgb(100, 71, 26)";
    }else{
        removeBtn.style.backgroundColor = "rgb(146, 102, 35)";
    }
    deleteState = !deleteState;
})

function handleticketDeleteContainer(ticketContainer){
    ticketContainer.addEventListener("click", function(){
        if(deleteState == true){
            ticketContainer.remove();
        }
    })
}