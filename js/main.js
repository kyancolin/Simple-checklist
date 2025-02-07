var taskinput = document.getElementById("js--input");
var running = "false";
taskinput.onkeyup = function (event){
    if (event.key === "Enter"){
        var newtask = document.createElement("li");
        newtask.innerText = taskinput.value;
        newtask.classList = "todo__task";
        newtask.dataset.running = "false";
        document.getElementById("js--list").appendChild(newtask);
        taskinput.value = "";
        newtask.onclick = function(event){
            event.target.classList.add("todo__task--done");
            todone(event);
        }
    }
}

var tasks = document.getElementsByClassName("todo__task");
var timer = null;
for (var i = 0; i < tasks.length; i++){
    tasks[i].onclick = function(event){
        if(event.target.dataset.running === "false"){
            event.target.classList.add("todo__task--done");
            event.target.dataset.running = "true";
            todone(event);
        }
        else if(event.target.dataset.running === "true"){
            event.target.classList.toggle("todo__task--done");
            clearTimeout(timer);
            event.target.dataset.running = "false";
        }
    }
}


function todone(event){
    timer = setTimeout(function(){
        var donetask = document.createElement("li");
        donetask.classList = "todo__task todo__task--done";
        donetask.innerText = event.target.innerText;
        document.getElementById("js--done").appendChild(donetask);
        event.target.remove();
    },3000)
}
