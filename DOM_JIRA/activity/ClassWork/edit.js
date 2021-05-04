// Getting lockButton element
let lockBtn = document.querySelector(".lock");
let lockFlag = true;

// Add event to it
lockBtn.addEventListener("click", function(){
    // Take ticket description element
    let taskDescElemArr = document.querySelectorAll(".ticket-desc");

    // If lockflag is true
    if(lockFlag == true){
        // Then remove fa-lock and add fa-unlock-alt to show unlock icon on toolbar
        lockBtn.classList.remove("fa-lock");
        lockBtn.classList.add("fa-unlock-alt");
        taskDescElemArr.forEach(function(taskDescElem){
            taskDescElem.setAttribute("contenteditable", "true");
        })
    }else{
        lockBtn.classList.remove("fa-unlock-alt");
        lockBtn.classList.add("fa-lock");
        taskDescElemArr.forEach(function(taskDescElem){
            taskDescElem.setAttribute("contenteditable", "false");
        })
    }
    lockFlag = !lockFlag;
})