// dark and light mode logic

let modebut = document.querySelector("#darklight");
let body = document.querySelector("body");
let resertbut = document.querySelector("#reset-but");
let dLbut = document.querySelector("#darklight");


let mode = "light";

modebut.addEventListener("click", ()=>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        modebut.innerText = "Light Mode";
        resertbut.classList.add("resetDark");
        resertbut.classList.remove("resetLight");
        dLbut.classList.add("resetDark");
        dLbut.classList.remove("resetLight");
    } else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        modebut.innerText = "Dark Mode";
        resertbut.classList.add("resetLight");
        resertbut.classList.remove("resetDark");
        dLbut.classList.add("resetLight");
        dLbut.classList.remove("resetDark");
    }
});