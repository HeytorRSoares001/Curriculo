// 1. Efeito de Digitação no Título
const typingEffect = () => {
    const title = document.getElementById('typing-effect');
    const text = "Heytor Rocha Soares";
    let index = 0;

    const type = () => {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidade da digitação
        }
    };

    title.textContent = ""; // Limpa o título antes de começar
    type();
};

// 2. Botão de Modo Escuro/Claro
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Escuro';
        }
    });
}

// 3. Rolagem Suave para as Seções
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Exibir o Ano Atual no Rodapé
const currentYear = document.getElementById('current-year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Iniciar Efeito de Digitação ao Carregar a Página
document.addEventListener('DOMContentLoaded', typingEffect);