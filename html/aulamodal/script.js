const btnModal =document.getElementById('open')
const btnConfirma =document.getElementById('confirmar')
const btnCancela =document.getElementById('cancelar')

btnModal.addEventListener('click',open)

btnCancela.addEventListener('click', close)

btnConfirma.addEventListener('click', ()=>{
    close()
    alert('Confirnado com sucesso')
})


function open(){
    const modal = document.getElementById('sec-modal')
    
    modal.classList.remove('hide')
}
function close(){
    const modal = document.getElementById('sec-modal')
    
    modal.classList.add('hide')
}
