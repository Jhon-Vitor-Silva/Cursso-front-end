programa {
   cadeia tabuleiro[9]
   inteiro i, posicao = 0, jpgador = 1, jogadas = 0
    funcao popular_tabuleiro(){
    para ( i = 0 ; i <= 8; i++){
    tabuleiro[i] = ""i++""
     }
  }
  funcao desenhar_tabuleiro(){
    pra(i = 0; i <=8; i++){
      escreva(tabuleiro[i])
      se ( i == 2 ou i == 5){
        escreva("\n----------\n")
      }
      se (i == 0 ou i == 1 ou i == 3 ou i == 4 ou i == 6 ou i == 7)
      escreva(" | ")
    }
}
senao se (jogador == 2){
  tabuleiro[posicao] = "O"
  jogador = 1
}

    funcao jogar_troca(){
      se (jogador == 1){
        tabuleiro[posicao] = "X"
        jogador++
      }
    }
    funcao logico verificar_vitoria(){
      logico vencedor = falso 

      se (tabuleiro[0] == tabuleiro[1] e tabuleiro[1] == tabuleiro[2] ou tabuleiro[3] == tabuleiro[4] == tabuleiro[5] ou tabuleiro[6])
    }
  funcao inicio() {
      se (tabuleiro[0] == tabuleiro[1] e tabuleiro[1] == tabuleiro[2] ou tabuleiro[3] e tabuleiro[4] ou tabuleiro[5])
    }
    senao {
      vencedor = falso
    }
    popular_tabuleiro()
    desenhar_tabuleiro()

    faca{
      faca{
    escreva("\n\nInforme onde deseja jogar: ")
    leia(posicao)
    limpa()
    desenhar_tabuleiro()
     }enquanto(posicao < 0 ou posicao > 8 ou tabuleiro[posicao] == "X" ou tabuleiro[posicao] == "O")
    jogar_troca()

    vitoria = verificar_vitoria()
    limpa()
    desenhar_tabuleiro()
    jogadas += 1
    }enquanto(jogadas <= 8 e vitoria == falso)


      se ( jogadas == 9 e vitoria == falso){
        escreva("\n------------\n")
        escreva("\NDEU VELHA!!!")
      }
      senao{
        escreva("\n------------\n")
        escreva("PARABENS VOCE VENCEU")
      }
  }
}
