// Selecting input box from html page
let inputBox = document.querySelector(".input-box");
let taskList = document.querySelector(".task-list");
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

        // Appending li tag to ul tag
        taskList.appendChild(taskElem);

        // Reseting inputbox
        inputBox.value = "";

        // Adding event for a particuar li tag that id double clicked then will be removed
        taskElem.addEventListener("dblclick", function(){
            taskElem.remove();
        });
    }
});
console.log("after");