function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        // alert('Elemento não encontrado');
       
    }

    if (elemento != null && elemento.localName === 'audio' ) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }
    else {
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado oubseletor inválido');
    }
}




// enquanto
for (let contador = 0;  contador < listaDeTeclas.length; contador++)  {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code)

        if (evento.code === 'space' || evento.code === 'Enter'){
        tecla.classList.add('ativa'); 
    }
     

    
    }
    
   tecla.onkeyup = function(){
    tecla.classList.remove('ativa')
   }

}