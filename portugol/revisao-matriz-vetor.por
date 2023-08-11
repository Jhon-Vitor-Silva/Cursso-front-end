programa {
  funcao inicio() {
    inteiro linha, coluna
    cadeia naval[7][7]
    naval[3][4] = "Barco"
    naval[1][5] = "submarino"
    naval[2][0] = "Voce afundou"

    escreva("Informe a linha")
    leia(linha)
    escreva("Informe a coluna")
    leia(coluna)

    se (linha == 3 e coluna == 4){
      escreva("Voce achou um ", naval[3][4])
    }
    senao se (linha == 1 coluna == 5){
      escreva("Voce achou um ", naval[3][4])
    }
    senao se (linha == 2 e coluna == 0){
      escreva(naval[2][0])
    }
    senao {
      escreva("Não foi dessa vez!")
    }
  }
}
