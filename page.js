//Esta funcionadno!
//console.log ('Our First Extension Text Message');

//Percurso no DOM
function walkTree (root,level){
    if (root.nodeType == Node.TEXT_NODE){
        console.log(level + 'text:' + root.textContent);
    } else {
        console.log (level + root.nodeName);
    }
    for (const child of root.childNodes){
        walkTree(child, level + "  ");
    }
}
walkTree(document.querySelector('html'), "");


//Inserir uma tag nova HTML na página
const child = document.createElement('h1'); //criei um elemento h1
child.textContent = 'A NOVA TAG FOI CRIADA!'; //adiconar conteudo de texto
child.id = 'h1_novo'; // adicionar id
child.style.color = 'blue'; //acessar estilo da tag - alterar a cor da fonte
child.style.fontSize = '5em'; //acessar estilo da tag - font size (repare no camel case de font-size para fontSize)
child.style.position = 'absolute';
child.style.top = '10px';
child.style.left = '40px';
document.body.appendChild(child); //adicionar dentro da tag body


// Mudando a cor do texto de uma tag qualquer para azul 
const h1tag = document.querySelector('#h1_novo'); //pesquisa da tag ou qualquer outro seletor pelo id h1_novo
if (h1tag){ //verifica se eu encontrei algo, ou seja, caso na encontre esse valor iftag é nulo e nao entra no if
    h1tag.style.color = 'red';
    h1tag.style.fontSize = '10em';
}

// Alterar a cor da fonte e o backgroud
const body_tag = document.querySelector('body');
if (body_tag){
    body_tag.style.color = 'red';
    body_tag.style.backgroundColor = 'black'; //camel case
}


// Link para ajudar com extensions - documentação
// - developer.chrome.com/extensions