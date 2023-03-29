const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add('ativo');
    }    
}

links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true; 
    } 
}

parametros.forEach(ativarProduto);

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');   
    pergunta.setAttribute('aria-expanded', ativa);    
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

const galeria = document.querySelectorAll('.guitarra-imagens img');
const galeriaContainer = document.querySelector('.guitarra-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;    
    if(media) {
        galeriaContainer.prepend(img);
    }            
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

if(window.SimpleAnime) {
    new SimpleAnime();
}