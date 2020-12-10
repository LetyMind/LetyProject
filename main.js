const header = document.getElementById("header")

window.addEventListener("scroll", (e)=> 
{
    let position = Math.round(window.scrollY) 

    if (position > 10 ) 
    {
        header.querySelector("h2").classList.remove("text-dark")    
        header.querySelector("h2").classList.add("text-white")  
        header.classList.add("opacityON")
        header.classList.remove("opacityOFF")
    }
    else
    {
        header.querySelector("h2").classList.add("text-dark") 
        header.querySelector("h2").classList.remove("text-white")
        header.classList.add("opacityOFF") 
        header.classList.remove("opacityON")
    }

})




