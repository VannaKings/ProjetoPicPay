//Selecionando lista
const listaOpcoes = document.querySelector(".secaoDetalhesDaConta_opcoesTransacoes")
listaOpcoes.addEventListener("click", indentificarOpcoes)

//Voltar para Home
const home = document.querySelector(".cabecalho")
home.addEventListener("click",indentificarOpcoes)


function indentificarOpcoes(event)
{
    const elemento  = event.target

    if(elemento.tagName == "LI")
    {
        const id = elemento.id
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`);

        removeClasseMostrar()
        
        secaoEscolha.classList.add("mostrar")
    }
    
    if(elemento.className == "logoHome")
    {    
        const selecionarPag = document.querySelector(".secaoTransacao_pagamento") 

        removeClasseMostrar()

        selecionarPag.classList.add("mostrar")
    }
}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseMostrar()
{
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++)
    {
        divs[i].classList.remove("mostrar")
    }
}



