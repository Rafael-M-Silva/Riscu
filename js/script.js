const menuMobile = document.querySelector(".menu-mobile")

const handleClick = () => {
  menuMobile.classList.toggle("open")
}

menuMobile.addEventListener("click", handleClick)


// Verifica se o tema do navegador é claro ou escuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = "./assets/favicon-light.svg";
  } else {
    var favicon = document.querySelector("link[rel='icon']");
    favicon.href = "./assets/favicon-dark.svg";
  }
  