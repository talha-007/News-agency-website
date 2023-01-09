const toggle_btn = document.querySelector('.nav-toggle-btns');
const toggle_nav= document.querySelector(".navbar-nav");
const toggle_transparent_layer = document.querySelector(".transparent-layer")

const toggleNavbar = () => {
    toggle_btn.classList.toggle("active-btn")
    toggle_nav.classList.toggle("active")
    toggle_transparent_layer.classList.toggle("active-layer")
}

toggle_btn.addEventListener("click", ()=> toggleNavbar())
