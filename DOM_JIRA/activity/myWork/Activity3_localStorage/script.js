// Taking elements of html page by querySelector
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
let tasksArr = [];
let cColor = colors[colors.length - 1];

if(localStorage.getItem("alltasks")){
    // localStorage.clear();
    let strArr = localStorage.getItem("alltasks");
    tasksArr = JSON.parse(strArr);

    for(let i=0; i<tasksArr.length; i++){
        let ticketContainer = document.createElement("div");
        ticketContainer.setAttribute("class", "ticket-container");
        ticketContainer.innerHTML= ` <div class="ticket-color ${tasksArr[i].tColor}"></div>
            <div class="ticket_sub-container">
                <h3 class="ticket-id">${tasksArr[i].tId}</h3>
                <p class="ticket-desc">${tasksArr[i].tTask}</p>
            </div>`;
        mainContainer.appendChild(ticketContainer);

        handleticketColorContainer(ticketContainer, tasksArr[i].tId);
        handleticketDeleteContainer(ticketContainer, tasksArr[i].tId);
    }
}

// Function for setting background color on click
for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener("click", function () {
        let arr = filterOptions[i].children;
        let chclassesArr = arr[0].classList;
        mainContainer.style.backgroundColor = chclassesArr[0];
    });
}


// function for opening modal on click +
addBtn.addEventListener("click", function () {
    if (flag == false) {
        modalContainer.style.display = "flex";
    } else {
        modalContainer.style.display = "none";
    }
    flag = !flag
})

// function for clicking on modal filters to sleect current colors
for (let i = 0; i < modalFilters.length; i++) {
    modalFilters[i].addEventListener("click", function () {
        // Function to remove and add vorder to the particular color in modal
        modalFilters.forEach(function (modalFilter) {
            modalFilter.classList.remove("border");
        })
        modalFilters[i].classList.add("border");
        cColor = modalFilters[i].classList[1];
    })
}

// Functionality of creating ticket on clicking enter
descBox.addEventListener("keydown", function (e) {

    if (e.key == "Enter") {
        let task = descBox.value;
        createTicket(task, cColor);
        cColor = colors[colors.length - 1];
        modalContainer.style.display = "none";
        flag = false;
        descBox.value = "";
    }
})


// Function which creates ticket and attach its colr and delete functionality to it
function createTicket(task, cColor){
    let ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-container");
    // Added uid from index.html which will give always unique id
    let id = uid();
    tasksArr.push({
        tId: id,
        tTask: task,
        tColor: cColor
    });
    let StrArr = JSON.stringify(tasksArr);
    localStorage.setItem("alltasks", StrArr);
    ticketContainer.innerHTML= ` <div class="ticket-color ${cColor}"></div>
            <div class="ticket_sub-container">
                <h3 class="ticket-id">${id}</h3>
                <p class="ticket-desc">${task}</p>
            </div>`;
    mainContainer.appendChild(ticketContainer);
    handleticketColorContainer(ticketContainer, id);
    handleticketDeleteContainer(ticketContainer, id);
}

// Function to change color of ticket
function handleticketColorContainer(ticketContainer, id){
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
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].tId === id) {
                tasksArr[i].tColor = newColor;
                break;
            }
        }
        let StrArr = JSON.stringify(tasksArr);
        localStorage.setItem("alltasks", StrArr);
    })
}

// Remove button functionality
removeBtn.addEventListener("click", function () {
    if(deleteState == false){
        removeBtn.style.backgroundColor = "rgb(100, 71, 26)";
    }else{
        removeBtn.style.backgroundColor = "rgb(146, 102, 35)";
    }
    deleteState = !deleteState;
})

// Particular ticket delete functionality
function handleticketDeleteContainer(ticketContainer, id){
    ticketContainer.addEventListener("click", function(){
        if(deleteState == true){
            ticketContainer.remove();
            for (let i = 0; i < tasksArr.length; i++) {
                if (tasksArr[i].tId === id) {
                    tasksArr.splice(i, 1);
                    break;
                }
            }
        }
        let StrArr = JSON.stringify(tasksArr);
        localStorage.setItem("alltasks", StrArr);
    })
}