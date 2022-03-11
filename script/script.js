function initHandleAnimaisLista() {

  const imagens = document.querySelectorAll('.js-tabmenu li');
  const contents = document.querySelectorAll('.js-tabcontent section');
  if (imagens.length && contents.length) {

    contents[0].classList.add('ativo');
    function getIndex(index) {

      contents.forEach(content => {

        content.classList.remove('ativo');
      })

      contents[index].classList.add('ativo');
    }

    imagens.forEach((imagem, index) => {
      imagem.addEventListener('click', function () {
        getIndex(index);
      })
    })
  }
}

initHandleAnimaisLista();

function initAccordionList() {

  const menuDt = document.querySelectorAll('.js-accordion dt');
  menuDt[0].nextElementSibling.classList.add('ativo');
  if (menuDt.length) {
    

    menuDt.forEach((item) => {

      item.addEventListener('click', function () {

        item.nextElementSibling.classList.toggle('ativo');
      });
    });
  };
}

initAccordionList()

function initScrollIntoView(){;

  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block:  "start",
    })
  }
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  });
}
initScrollIntoView();

  function initSmoothScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const halfScreen = window.innerHeight * 0.5;
    sections[0].classList.add('ativo');
    if (sections.length) {

    function animationSmoothScroll() {
      sections.forEach((section) =>{
        const top = section.getBoundingClientRect().top;
        const showSection = top - halfScreen < 0;
        if (showSection) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      }) 
    }

    window.addEventListener('scroll', animationSmoothScroll);
  }
}
initSmoothScroll()

