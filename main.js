const container = document.querySelector("div");
container.style.height = "850px";
container.style.width = "850px";
container.style.backgroundColor = "rgb(244, 241, 228)";
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
    let x = 0;
    box.addEventListener("mouseenter" ,(e) => {
        const r = (Math.random()*255);
        const g = (Math.random()*255);
        const b = (Math.random()*255);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            let j = (x++)/10;
            box.style.opacity = `${j}`
    })
}
container.appendChild(row);
}
