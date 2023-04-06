let toggle_btn = document.getElementById('toggle_btn')
let menu_bar = document.getElementById('menu-bar')

toggle_btn.addEventListener("click",()=>{
    menu_bar.classList.toggle('hidden')
})