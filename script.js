//faQ
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showProjects(index) {
        const offset = -index * 340; // Ajuste conforme necessário
        document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showProjects(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectItems.length - 3) {
            currentIndex++;
            showProjects(currentIndex);
        }
    });

    showProjects(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obter os valores dos campos do formulário
        const nome = form.elements.name.value;
        const email = form.elements.email.value;
        const mensagem = form.elements.message.value;

        // Criar um objeto com os dados do formulário
        const data = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        // Enviar os dados para o Formspree usando fetch
        fetch('https://formspree.io/f/mwpvbgoo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                // Limpar os campos do formulário
                form.reset();

                // Mostrar a mensagem de confirmação
                confirmationMessage.innerHTML = '<p class="success">E-mail enviado com sucesso!</p>';
                form.appendChild(confirmationMessage);

                setTimeout(function () {
                    confirmationMessage.remove();
                }, 3000);
            })
            .catch((error) => {
                console.error('Error:', error);

                // Mostrar mensagem de erro
                confirmationMessage.innerHTML = '<p class="error">Ocorreu um erro ao enviar o e-mail.</p>';
                form.appendChild(confirmationMessage);

                setTimeout(function () {
                    confirmationMessage.remove();
                }, 3000);
            });
    });

    // Scroll to top button functionality
    let backToTopButton = document.getElementById('back-to-top');
    let scrollTimeout;

    // Função para mostrar o botão
    function showBackToTopButton() {
        backToTopButton.style.display = 'block';
    }

    // Função para ocultar o botão
    function hideBackToTopButton() {
        backToTopButton.style.display = 'none';
    }

    // Evento de rolagem da página
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            // Mostra o botão se a página for rolada mais de 100px
            showBackToTopButton();

            // Limpa o temporizador anterior, se existir
            clearTimeout(scrollTimeout);

            // Define um novo temporizador para ocultar o botão após 2 segundos de inatividade
            scrollTimeout = setTimeout(hideBackToTopButton, 1000);
        } else {
            // Oculta o botão imediatamente se a página estiver no topo
            hideBackToTopButton();
        }
    });

    // Evento de clique no botão
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


//PROJETOS

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Ver Projeto"
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    // Adiciona um ouvinte de eventos para cada botão
    viewProjectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtém a URL da página do projeto
            const projectUrl = this.getAttribute('data-href');

            // Redireciona para a página do projeto correspondente
            if (projectUrl) {
                window.location.href = projectUrl;
            } else {
                console.log('URL do projeto não encontrada');
            }
        });
    });
});
