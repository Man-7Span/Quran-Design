import './style.css'

const popUp = document.querySelector("#Discount");
const close = document.querySelector("#close");




setTimeout(() => {
    popUp.style.display ="block";
}, 2000);

close.addEventListener("click",()=>{
    console.log("xmkw");
    popUp.style.display ="none";
})