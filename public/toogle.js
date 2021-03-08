const sections = document.querySelectorAll('.section-detail');

for(let section of sections){
  const option = section.querySelector('span');
  const content = section.querySelector('ul') || section.querySelector('p');
  
  option.addEventListener('click', function(){
    if(option.innerHTML == 'Mostrar'){
      content.classList.remove('toogle');
      option.innerHTML = 'Esconder';
    } else if (option.innerHTML == 'Esconder') {
      content.classList.add('toogle');
      option.innerHTML = 'Mostrar';
    }
  })
}