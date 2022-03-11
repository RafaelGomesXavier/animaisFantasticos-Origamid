function aciveContentEvent(){
  const imagens = document.querySelectorAll('.js-tabmenu li');
  const contents = document.querySelectorAll('.js-tabcontent section');
  contents[0].classList.add('ativo');
  
  function getIndex(index) {
    contents.forEach(content => {
      content.classList.remove('ativo');
    })
    contents[index].classList.add('ativo');
  }

  imagens.forEach((imagem, index)=>{
    imagem.addEventListener('click', function(){
      getIndex(index);
    })
  })
}
function descriptionListAnimate(){
  const menuDt = document.querySelectorAll('.js-accordion dt');
  
  menuDt.forEach((item)=>{
    item.addEventListener('click',function(){
      item.nextElementSibling.classList.toggle('ativo');
  
    });
  });

};
descriptionListAnimate();
aciveContentEvent()