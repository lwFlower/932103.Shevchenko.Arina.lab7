var container = document.getElementById("container");
let number = document.getElementById("num");

function addSquare(){
    for(let i=0; i < number.value; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.top = String(Math.random()*350+50) +'px';
        div.style.left = String(Math.random()*1000+50) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';
        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteObj);

        container.appendChild(div);
    }
}
function addTriangle(){
    for(let i=0; i < number.value; i++){
        let div = document.createElement("div");
        div.classList.add("triangle");
        div.style.top = String(Math.random()*350+50) +'px';
        div.style.left = String(Math.random()*1000+50) + 'px';
        div.style.borderBottomWidth = String(Math.random()*200+50) + 'px';
        div.addEventListener('click', changeColorTri);
        div.addEventListener('dblclick', deleteObj);

        container.appendChild(div);
    }
}
function addCircle(){
    for(let i=0; i < number.value; i++){
        let div = document.createElement("div");
        div.classList.add("circle");
        div.style.top = String(Math.random()*350+50) +'px';
        div.style.left = String(Math.random()*1000+50) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';
        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteObj);

        container.appendChild(div);
    }
}

function changeColor(event){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16) + 'cc';
    event.target.style.background = color;
}

function changeColorTri(event){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16) + 'cc';
    event.target.style.borderBottomColor = color;
}

function deleteObj(event){
    event.target.remove();
}