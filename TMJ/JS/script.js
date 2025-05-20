
// Função de menu responsivo
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};

// Animação simples no scroll
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.animar');
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < window.innerHeight - 100) {
            el.classList.add('ativo');
        }
    });
});
