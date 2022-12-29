console.log("script.js connecté")

function WindowSize1() {
    const menu_burger= document.querySelector(".burger-content")
    const icon_close = document.querySelector(".burger-close")
    const icon_burger = document.querySelector(".burger-button")

    if(window.onresize){
        menu_burger.style.display = "none"
        icon_close.style.display = "none"
        icon_burger.style.display = "block"
    }    
}
  
function showMenuBurger(){
    const menu_burger= document.querySelector(".burger-content")
    const icon_burger = document.querySelector(".burger-button")
    const icon_close = document.querySelector(".burger-close")
    menu_burger.style.display = "block"
    icon_burger.style.display = "none"
    icon_close.style.display = "block"
}


function closeMenuBurger(){
    const menu_burger= document.querySelector(".burger-content")
    if(menu_burger.style.display = "block"){
        const icon_burger = document.querySelector(".burger-button")
        const icon_close = document.querySelector(".burger-close")
        menu_burger.style.display = "none"
        icon_burger.style.display = "block"
        icon_close.style.display = "none"

    }
}