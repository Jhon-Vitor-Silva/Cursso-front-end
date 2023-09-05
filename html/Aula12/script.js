//onmouseenter="azul()"
//onmouseout="vermelho()"
//onmousedown="clicou()"
//onmouseup="soltou()"



// const div = document.getElementById('quadrado')
// div.addEventListener('mouseenter', azul )
// div.addEventListener('mouseout', vermelho )
// div.addEventListener('mousedown', clicou )
// div.addEventListener('mouseup', soltou )

// function azul(){
//     div.style.backgroundColor = 'blue'
// }
// function vermelho(){
//     div.style.backgroundColor = 'red'
// }
// function clicou(){
   
//     div.innerHTML = `
//     <ul>
//         <li> item 1 </li>
//         <li> item 2 </li>
//         <li> item 3 </li>

//     `
// }

// function soltou(){
//     div.innerText = ''
// }


const soma = document.getElementById('soma')
const subtracao = document.getElementById('subtração')
const multiplicacao = document.getElementById('multiplicação')
const divisao = document.getElementById('divisão')
const div = document.getElementById('resposta')

soma.addEventListener('click' , somar)
subtracao.addEventListener('click' , subtração)



function somar(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) + Number(valor2)
    div.innerText = resposta

}
function subtração(){
    var valor1 = document.getElementById('n1').value
    var valor2 = document.getElementById('n2').value
    var resposta = Number(valor1) - Number(valor2)
    div.innerText = resposta



}


