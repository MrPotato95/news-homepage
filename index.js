const sideNav = document.querySelector("#sideNav")
const overlay = document.querySelector("#overlay")
const mediaQuery = window.matchMedia("(max-width: 768px)")

function openNav() {
  sideNav.style.display = "block"
  overlay.style.display = "block"
}

function closeNav() {
  sideNav.style.display = "none"
  overlay.style.display = "none"
}
