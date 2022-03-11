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