// dark and light mode logic

let modebut = document.querySelector("#darklight");
let body = document.querySelector("body");


let mode = "light";

modebut.addEventListener("click", ()=>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebut.innerText = "Light Mode";
       
    } else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebut.innerText = "Dark Mode";
    }
});