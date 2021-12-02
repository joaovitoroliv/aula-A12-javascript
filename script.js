// Aula A12: Extensoes de Browser

// Relembrando Eventos em Javascript
// Pergunta: Se colocarmos um event listener em um elemento, o que acontece se o usuario clicar em um filho daquele elemento? \
// Exemplo: Codigo no HTML
const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggleVisibility);
function toggleVisibility(){
    console.log('evento disparado');
}
// Resposta: caso o usuario clique em um elemento filho de um elemento pai que tenha um event listener associado, um evento será disparado.

/////////////////////////////// Event.currentTarget vs target
function toggleVisibility2(event){
    const theElementClicked = event.target; //elemento filho
    const theElementTheEventIsTiedTo = event.currentTarget; //elemento pai
}

// Multiplos Event Listeners
//  - Inner e Outer
// - O que acontece? Quem dispara primeiro? R: Inner dispara primeiro, depois outer, ou seja, sempre o elemento mais interno será disparado primeiro e depois os de fora caso haja.
//////////////////////////////////////////////////////

// Explicações sobre o DOM... 

// Browser Extensions
// - O que é uma extensão? Um código Javascript que injetamos na página antes ou depois dela ser carregada
// Usamos Content Scripts, composto de:
// - manifest.json: contendo titulo, configurações e etc
// - page.js: o arquivo da extensão

// Exemplo de manifest.json nos arquivos dessa pasta
// - content_scripts: -> mathes: ["<all_urls>"] - extensao funciona em todas as urls ou em uma url especifica
// - content_scripts: -> js: ["page.js"] - quais codigos javascripts vc quer que rode pela extensão, nesse caso rodamos o page.js. OBS: poderia ser codigo css ou html por exemplo usando css ao inves de js.
// - icons: colocar icone para a sua extensao

// Como testar sua extensao:
// - Digitar chrome://extensions
// - Ativar developer mode
// - Carregar expandia e pronto! Sua primeira extensao está rodando em qualquer site