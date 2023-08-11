programa {
  inclua biblioteca  Matematica -->

  funcao porcentagem(real numero_porcento, real porcentagem){
    retorne (numero_porcento * porcentagem) / 100
  }

  funcao multiplicacao(real numero, real numero2){
    retorne numero * numero2
  }
  funcao divisao(real numero, real numero2){
    retorne numero numero / numero2
  }

  funcao raiz_quadrada(inteiro numero){
    retorne mat.raiz(numero, 2)
  }
  funcao valor_de_pi () {
    retorne mat.PI
  }
  funcao menu (){
  escreva("\n Informe o que deseja relizar: \n")
  escreva("01 - soma: \n")
  escreva("02 - subtração: \n")
  escreva("03 - multiplicação: \n")
  escreva("04 - divisão: \n")
  escreva("05 - raiz quadrada: \n")
  escreva("06 - porcentagem: \n")
  escreva("07 - numero Pi: \n")
  escreva("99 - finalizar: \n")
    










    
  }
  
  funcao inicio() {
    inteiro opcao,
    real numero_porcento, calcule_porcentagemnumero, numero2
    real numero_somado

    enquanto (opcao != 00){


    }

    se (opcao == 01){
    enquanto (numero != 00){
    escreva("Informe o numero a ser somado: \n")
    leia(numero)
    numero_somado += numero
    escreva(numero_somado, "\n")
    }
    }
    senao se (opcao == 02){
      limpa()

    senao se (opcao == 03){
      limpa()
      escreva("Informe o numero a ser multiplicasdo: ")
      leia(numero)
      escreva("Informe o multiplicado: ")
      leia(numero2)
      limpa()
      escreva(multiplicacao(numero, numero2))
    }

    senao se (opcao == 04){
      limpa()
      escreva("nforme o numero a ser dividido: ")
      leia(numero)
      escreva("Informa o divisor: ")
      leia(numero2)
      limpa()
      se (numero == 0 ou numero2 == 0){
        escreva("Não épossível divisões com 0 ")
    }
    senao se {
      escreva()
    }
    senao se (opcao == 05){
      escreva("Informe o valor que deseja saber a raiz: ")
      leia(numero)
      limpa()
      escreva(raiz_quadrada(numero))
    }

    senao se ( opcao == 06){
    lima()
    escreva("Informe o numero desejado: ")
    leia(numero_porcento)
    escreva("\n Qual porcentagem deseja saber: ")
    leia(porcentagem)
    (limpa)
    escreva(calcule_porcentagem(numero_porcento, porcentagem))
    }

  }
}
