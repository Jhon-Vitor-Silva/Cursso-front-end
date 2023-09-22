const btnEnviar = document.querySelector('button')
const cep = document.getElementById('cep')

btnEnviar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then(data => {
    console.log(data)
        
    })
})

