// Selecting input box from html page
let inputBox = document.querySelector(".input-box");
let taskList = document.querySelector(".task-list");

// Adding this to add localstorage
let tasksArr = [];

// Getting all the items from of local storage in strArr
if(localStorage.getItem("alltasks")){
    let strArr = localStorage.getItem("alltasks");

    //  Converting strArr into normal array
    tasksArr = JSON.parse(strArr);

    // Iterating through the array
    for(let i=0; i<tasksArr.length; i++){
        // Here creating a li tag element
        let taskElem = document.createElement("li");

        // Assinging task with tasksArr[index]
        let task = tasksArr[i];

        // Setting attribute  class with name task
        taskElem.setAttribute("class", "task");

        // Setting taskelem innertext as input box innertxt
        taskElem.innerText = task;

        // Appending li tag to ul tag
        taskList.appendChild(taskElem);

        // Adding event for a particuar li tag that id double clicked then will be removed
        taskElem.addEventListener("dblclick", function(){
            // Removing from localStorage
            let element = taskElem.innerText;
            let idx = tasksArr.indexOf(element);
            tasksArr.splice(idx, 1);
            let StrArr = JSON.stringify(tasksArr);
            localStorage.setItem("alltasks", StrArr);
            
            // Removing from ui
            taskElem.remove();
        });
    }
}
console.log("Before");
console.log("ip val", inputBox);

// Event listener whenever a key is pressed in input box
// function passed will be called whenever key is pressed
// Whenever hit enters it prints the value entered
// function passed inside addEventListener is callback function
inputBox.addEventListener("keypress", function (e) {
    console.log("key press was called");
    if(e.code == "Enter"){
        // Getting input box value in task
        let task = inputBox.value;

        // Here creating a li tag element
        let taskElem = document.createElement("li");

        // Setting attribute  class with name task
        taskElem.setAttribute("class", "task");

        // Setting taskelem innertext as input box innertxt
        taskElem.innerText = task;

        // Push in tasksArr to add in localStorage
        tasksArr.push(task);

        // Converting normal array in strArr
        let StrArr = JSON.stringify(tasksArr);

        // Add items in local storage at alltasks id
        localStorage.setItem("alltasks", StrArr);

        // Appending li tag to ul tag
        taskList.appendChild(taskElem);

        // Reseting inputbox
        inputBox.value = "";

        // Adding event for a particuar li tag that id double clicked then will be removed
        taskElem.addEventListener("dblclick", function(){
            // Removing from localStorage
            let element = taskElem.innerText;
            let idx = tasksArr.indexOf(element);
            tasksArr.splice(idx, 1);
            let StrArr = JSON.stringify(tasksArr);
            localStorage.setItem("alltasks", StrArr);
            
            // Removing from UI
            taskElem.remove();
        });
    }
});
console.log("after");