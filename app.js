const header=document.querySelector("header");
const currents=document.querySelectorAll("li a")

let idx=130;
window.addEventListener("scroll",()=>{
    // console.log(window.scrollY, header.offsetHeight);

    // if(window.scrollY>idx){
    //     header.classList.add("active")
    // }else{
    //     header.classList.remove("active")
    // }

    if (window.scrollY>80) {
        header.classList.add("show")
    }else{
        header.classList.remove("show")
    }
})

currents.forEach((current)=>{
    current.addEventListener("click",()=>{
        currents.forEach((curr)=>curr.classList.remove("current"))
        current.classList.add("current")    
    })
})