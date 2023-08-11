programa {
  funcao inicio() {
    inteiro idade[3], contador
    cadeia nome[3]
    para (contador = 0; contador <= 2 ; contador++){
    escreva("Qaul é o seu nome: ")
    leia(nome[contador])
    escreva("Qual é a sua idade: ")
    leia(idade[contador])
   } 

   limpa()
    para (contador = 0; contador <= 2 ; contador++ ){
      escreva(nome[contador], "\n")
      escreva(idade[contador], "\n")
    }
  }
}
