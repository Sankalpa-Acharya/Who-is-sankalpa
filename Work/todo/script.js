console.log("This is Java Script project 1")

let text_area = document.querySelector("#input_area");
let btn = document.getElementById("add")
btn.addEventListener("click", function () {
    let items = localStorage.getItem("items");

    if (items == null) {
        array = [];
    }
    else {
        array = JSON.parse(items);
    }
    array.push(text_area.value)
    localStorage.setItem("items", JSON.stringify(array))
text_area.value=""



show_notes();
})
let content=document.getElementsByClassName("content")

show_notes();
function show_notes(){

    let items = localStorage.getItem("items");
    
    if (items == null) {
        array = [];
    }
    else {
        array = JSON.parse(items);
    }
    html=""
    array.forEach(function(value,index) {
        html+=` <div class="content">
        <span>Note${index+1}</span>
        <p>${value}</p>
        <button onclick="deleter(${index})" >Delete</button>
        </div>  \n`
        
    });

if (array.length!=0){
    if(array.length>=11)
    {
        alert("You cannot add more than this")
    }
    else{
    content[0].innerHTML=html}
}
else{
    content[0].innerHTML="<b>Please Add notes using Add button</b>"
}
};

function deleter (index){
    let items = localStorage.getItem("items");
    if (items == null) {
        array = [];
    }
    else {
        array = JSON.parse(items);
    }
    
array.splice(index,1)
localStorage.setItem("items", JSON.stringify(array))
show_notes();


}