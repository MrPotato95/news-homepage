const sideNav = document.querySelector("#sideNav")
const navbar = document.querySelector("#navbar-list")
const overlay = document.querySelector("#overlay")

function openNav() {
  sideNav.style.display = "block"
  navbar.style.display = "none"
  overlay.style.display = "block"
}

function closeNav() {
  
  sideNav.style.display = "none"
  overlay.style.display = "none"
}
