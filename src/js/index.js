const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll('a.nav-link')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    let current = ''
    const headerHeight = header.offsetHeight

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 150
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id')
        }
    });

    navLink.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active')
        }
    })
})

navLink.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 5;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

emailjs.init({
    publicKey: "Sc29MNP2ZLGBRdNRR"
})

document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault()

    const formData = {
        name: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('assunto').value,
        message: document.getElementById('msg').value
    }

    const serviceID = "service_eb1mj8a"
    const templateID = "template_roo5aal"
    const button = document.getElementById('enviar')
    button.textContent = 'Enviando...'

    emailjs.send(serviceID, templateID, formData).then(() => {
        Toastify({

            text: "E-mail enviado com sucesso!",
            duration: 3000,
            style: {
                background: "#28a745",
                color: "#f4f4f4"
            }

        }).showToast();

        document.getElementById('contact-form').reset()
    })
    .catch(error => {
        Toastify({

            text: "Erro ao enviar o e-mail!",
            duration: 3000,
            style: {
                background: "#dc3545",
                color: "#f4f4f4"
            }

        }).showToast();

        console.error('Erro no envio', error)
    })
    .finally(() => {
        button.textContent = 'Enviar'
    })
})