const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function AddTask(){
    if (inputBox.value ==='') {
        alert("Must write task");
    } else {
        const li = document.createElement("li");
        let spanTag ='<span onClick="removeItems(this)" class="remove">\u00d7</span>';
        li.innerHTML = inputBox.value + spanTag;    
        listContainer.appendChild(li);
    
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
         saveData();
    } 
    // else (e.target.classList === "remove")
    // {
    //     listContainer.removeChild(this.closest("li"));
    //     saveData();
    // }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function removeItems(current){
    // Just remove the closest <li> ancestor to the <span> that got clicked
    listContainer.removeChild(current.closest("li"));
    saveData();
  }
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
      
