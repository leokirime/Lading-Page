const card = document.querySelector('.card');
const btnPerfil = document.getElementById ('perfil');
const btnVoltar = document.getElementById('voltar');

btnPerfil.addEventListener('click', ()=>{
    card.classList.add('flipped');
});

btnVoltar.addEventListener('click', () =>{
    card.classList.remove('flipped');
})