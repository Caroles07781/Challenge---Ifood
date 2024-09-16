document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.footer-section ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href'); // Pega o ID da seção
            const targetElement = document.querySelector(targetId); // Seleciona o elemento com o ID
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente para o elemento
        });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
