const container = document.querySelector("div");
container.style.height = "850px";
container.style.width = "850px";
container.style.backgroundColor = "grey";
const row = document.createElement("div");
row.classList.add("row");
const button = document.querySelector("button");
button.textContent = "Grid-Size";
button.addEventListener("click" , result);
function result(){
    row.replaceChildren();
    let GridSize = Number(prompt("Enter the Grid Size! :" , "16"));
    for(let i =0; i<(GridSize*GridSize); i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = (850 / GridSize) + "px";
    box.style.width = (850 / GridSize) + "px";
    row.appendChild(box);
    box.addEventListener("mouseenter" ,(e) => {
            box.style.backgroundColor = "pink";
    })
}
container.appendChild(row);
}
