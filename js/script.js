const menuMobile = document.querySelector(".menu-mobile")

const dropMenuMobile = () => {
  const dropMenu = document.querySelector(".navbar ul")
  const body = document.querySelector("body")
  menuMobile.classList.toggle("open")

  if(menuMobile.className === "menu-mobile open"){
    dropMenu.classList.add("drop-menu")
    body.classList.add("scroll-remove")
  }else {
    dropMenu.classList.remove("drop-menu")
    body.classList.remove("scroll-remove")
  }
}

menuMobile.addEventListener("click", dropMenuMobile)