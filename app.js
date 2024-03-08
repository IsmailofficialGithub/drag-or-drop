let list=document.querySelectorAll(".list");
let rightBox=document.querySelector("#right");
let leftBox=document.querySelector("#left");

console.log();
for (lists of list){
    lists.addEventListener("dragstart",(e)=>{
        let selected= e.target;

       rightBox.addEventListener(("dragover"),(e)=>{
        e.preventDefault();
       })
       rightBox.addEventListener(("drop"),(e)=>{
        rightBox.appendChild(selected);
        selected=null;

       })

       leftBox.addEventListener(("dragover"),(e)=>{
        e.preventDefault();
       })
       leftBox.addEventListener(("drop"),(e)=>{
        leftBox.appendChild(selected);
        selected=null;

       })

    })
} 