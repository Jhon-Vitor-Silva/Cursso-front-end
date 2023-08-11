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
   escreva(nome[0], "\n")
   escreva(idade[0], "\n")
   escreva(nome[1], "\n")
   escreva(idade[1], "\n")
   escreva(nome[2], "\n")
   escreva(idade[2], "\n")
  }
}
