let aanbevelingen = document.querySelector('i')

aanbevelingen.addEventListener('click', colorveranderen )

function colorveranderen(){
  aanbevelingen.classList.toggle('aanbevelingen_click i')
}