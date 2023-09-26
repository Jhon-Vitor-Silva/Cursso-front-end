// const KEY_OPENAI = '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'

// let mensagem = 'Quais são as girias corinthianas?'

// fetch('https://api.openai.com/v1/completions', {
//     method:'POST', 
//     headers:{
//         Accept: "application/json",
//         "Content-type": "application/json",
//         Authorization: `Bearer ${KEY_OPENAI}`
//     },
//     body: JSON.stringify({
//         model: "text-davinci-003",
//         prompt: mensagem,
//         max_tokens:2048,
//         temperature:0.5

//     })
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
const container = document.querySelector('.container')

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(produto=> {
                console.log(produto);
                produto.forEach(produto => {
                    container.innerHTML += `
                    <div class="card">
                    <h2>${produto.title}</h2>
                    <img src="${produto.image}"class="imagem">
                    <p class="descricao">${produto.description}</p>
                    <p class="preco">${produto.price}</p>
                    <button>Comprar</button>
                </div>`
                })


            })