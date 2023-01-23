function mostrar() {
    document.getElementById('Img').style.display = 'block';
}

function ocultar() {
    document.getElementById('Img').style.display = 'none';
}

document.getElementById('Escuela').onclick = function(){
    document.getElementById('primario').innerHTML = "Cursado en Esc. Nro. 13";
}

document.getElementById('Escuela2').onclick = function(){
    document.getElementById('secundario').innerHTML = "Cursado en Colegio Normal Nro. 7";
}

