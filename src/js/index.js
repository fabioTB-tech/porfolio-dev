const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll('a.nav-link')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    let current = ''
    const headerHeight = header.offsetHeight

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 150
        console.log(section)
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id')
            console.log(current)
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