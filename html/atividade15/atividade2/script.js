const itensLista = [...document.querySelectorAll('li')]
const botao = document.querySelector('button')
const lista1 = document.getElementById('lista1')
const lista2 = document.getElementById('lista2')

// adicionando classe selecionado aos itens clicados
itensLista.forEach((item)=>{
  item.addEventListener('clicou', (){
    item.classList.toggle('selecionado')
  })
})

for(let item = 0; item < itensLista.length;item++){
  itensLista[item].addEventListener('click', clicou)
}

botao.addEventListener('click', ()=>{

 const primeiraLista = document.querySelector('.primeira')
 const segundaLista = document.querySelector('.segunda')

  const selecionadosPrimeira = [...primeiraLista.querySelectorAll('.selecionado')]
  const selecionadosSegunda = [...primeiraLista.querySelectorAll('.selecionado')]

  console.log(selecionadosPrimeira)
  console.log(selecionadosSegunda)

  selecionadosPrimeira.forEach((item)=>{
    item.classList.remove('selecionado')
    lista2.appendChild(item)
  })
  selecionadosSegunda.forEach((item)=>{
    item.classList.remove('selecionado')
    lista1.appendChild(item)
  })
})
