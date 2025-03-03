function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play(); 
    
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // a constante lista recebe todos os  seletores da classe "tecla"





// enquanto
for (let contador = 0;  contador < listaDeTeclas.length; contador++)  {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

  


}