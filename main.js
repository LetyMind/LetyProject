const header = document.getElementById("header")

window.addEventListener("scroll", (e)=> 
{
    let position = Math.round(window.scrollY) 

    if (position > 10 ) 
    {
        header.querySelector("h4").classList.remove("text-dark")    
        header.querySelector("h4").classList.add("text-white")  
        header.classList.add("opacityON")
        header.classList.remove("opacityOFF")
    }
    else
    {
        header.querySelector("h4").classList.add("text-dark") 
        header.querySelector("h4").classList.remove("text-white")
        header.classList.add("opacityOFF") 
        header.classList.remove("opacityON")
    }
})


let abrir = document.getElementById("abrir"),
    modal = document.getElementById("modal"),
    cerrar = document.getElementById("cerrar")


abrir.addEventListener("click", ()=> 
{
    modal.classList.remove("d-none")
})

cerrar.addEventListener("click", ()=> 
{
    modal.classList.add("d-none")
})


