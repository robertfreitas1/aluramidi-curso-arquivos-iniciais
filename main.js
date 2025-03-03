function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); 
    
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // a constante lista recebe todos os  seletores da classe "tecla"


let contador = 0; 








// enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;


}