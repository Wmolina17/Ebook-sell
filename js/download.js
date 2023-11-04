function download(){
    let name = document.getElementById("ebook-form-name")
    let email = document.getElementById("ebook-email")

    if(name.value != "" && email.value != ""){
        var url = 'clean-code-free.pdf';
        var nombreArchivo = 'clean-code-free.pdf';
        var link = document.createElement('a');
        link.download = nombreArchivo;
        link.href = url;
        link.click();
        
        setTimeout(() => {
            // Instrucciones que se ejecutarán después de 3000 milisegundos
            var mensaje = document.getElementsByClassName("mensaje-download")[0];
            var pantallaNegra = document.getElementsByClassName("pantalla-negra")[0];
            var contMensaje = document.getElementsByClassName("cont-m-d")[0];
        
            mensaje.style.top = "25%";
            pantallaNegra.style.display = "block";
            contMensaje.style.top = "0";
        }, 2000);
    }
}

function cerrarMensaje(){
    var mensaje = document.getElementsByClassName("mensaje-download")[0]
    var pantallaNegra = document.getElementsByClassName("pantalla-negra")[0]
    var contMensaje = document.getElementsByClassName("cont-m-d")[0]
    pantallaNegra.style.display = "none"
    mensaje.style.top = "-100%" 
    contMensaje.style.top = "-100%"
}