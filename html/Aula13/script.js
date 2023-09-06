const login = document.getElementById('login')
const senha = document.getElementById('senha')
const enviar = document.getElementById('entrar')

enviar.addEventListener('click' , (event) =>{

    event.preventDefault();


   if (senha.value == ''){
    alert('senha não pode ser vazia')
    login.classList = 'erro'
   }
   if (loguin.value == ''){
    alert('login não podeser vazio')
    senha.classList = 'erro'
   }



})