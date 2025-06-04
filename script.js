document.getElementById('formIsomeria').addEventListener('submit', function(e) {
    e.preventDefault();

    const dupla = document.querySelector('input[name="dupla"]:checked').value;
    const grupos = document.querySelector('input[name="grupos"]:checked').value;
    const quiral = document.querySelector('input[name="quiral"]:checked').value;
    const resultado = document.getElementById('resultado');

    let mensagem = '';
    let classe = '';
    let imagemHTML = '';

    if (quiral === 's' && dupla === 's' && grupos === 's') {
        mensagem = 'A molécula possui isomeria GEOMÉTRICA E ÓPTICA.';
        classe = 'success';
        imagemHTML = `
            <img src="1.png" alt="Isomeria Geométrica" style="max-width:100%; margin-top:10px;">
            <img src="2.png" alt="Isomeria Óptica" style="max-width:100%; margin-top:10px;">
        `;
    } else if (dupla === 's' && grupos === 's') {
        mensagem = 'A molécula possui isomeria GEOMÉTRICA.';
        classe = 'warning';
        imagemHTML = `<img src="1.png" alt="Isomeria Geométrica" style="max-width:100%; margin-top:10px;">`;
    } else if (quiral === 's') {
        mensagem = 'A molécula possui isomeria ÓPTICA.';
        classe = 'warning';
        imagemHTML = `<img src="2.png" alt="Isomeria Óptica" style="max-width:100%; margin-top:10px;">`;
    } else {
        mensagem = 'A molécula NÃO possui isomeria geométrica nem óptica.';
        classe = 'alert';
    }

    resultado.innerHTML = mensagem + imagemHTML;
    resultado.className = classe;
});

function limparFormulario() {
    document.getElementById("formIsomeria").reset();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    resultado.className = '';
}

// Animação ao rolar para o rodapé
window.addEventListener('scroll', function() {
    const rodape = document.querySelector('.rodape');
    if (window.scrollY > 100) {
        rodape.classList.add('aumentado');
    } else {
        rodape.classList.remove('aumentado');
    }
});
