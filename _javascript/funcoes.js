    
function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function calc_preco() {
    var Qt = parseInt(document.getElementById('cQt').value);
    preco = Qt * 1532;
    document.getElementById('cPreco').value = preco;
}

// BOTÃO PESQUISARS
let botao = document.querySelector('button');
    botao.innerHTML = 'Muda Cor';

let h1 = document.querySelector('h1');

botao.addEventListener('mouserover', function() {
    h1.query.opacity = 0.1;
});

botao.addEventListener('click', function() {
    let cor = document.querySelector('#cor').value;
    document.querySelector('aside').style.backgroundColor = cor;
});