const form = document.querySelector("form")


const checkForm = () => {
    const btnSubmit = document.querySelector("#btn-submit")

    const name = document.querySelector("#name").value.length
    const email = document.querySelector("#email").value.length
    const ideia = document.querySelector("#ideia").value.length

    
    if(name > 4 && email > 8 && ideia > 5){
        btnSubmit.classList.remove("disabled")
        btnSubmit.removeAttribute("disabled", "")
        return;
    }
    
   

    btnSubmit.classList.add("disabled")
    btnSubmit.setAttribute("disabled", "")
    
}

form.addEventListener("input", checkForm)