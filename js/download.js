function download(){
    let name = document.getElementById("ebook-form-name")
    let email = document.getElementById("ebook-email")

    if(name.value != "" && email.value != ""){
        window.open("../clean-code-free.pdf")
    }
}