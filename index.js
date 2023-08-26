const sideNav = document.querySelector("#sideNav")
const overlay = document.querySelector("#overlay")


function closeNav() {
  sideNav.style.display = "none"
  overlay.style.display = "none"
}


function openNav() {
  sideNav.style.display = "block"
  overlay.style.display = "block"
}


