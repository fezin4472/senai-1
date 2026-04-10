programa {
  funcao inicio() {
    inteiro final

    escreva("digite o final da placa: ")
    leia(final)

    se(final == 0 ou final == 1){
      escreva("tudo exceto segunda")
    }senao se(final == 2 ou final == 3){
      escreva("tudo exceto terça")
    }senao se(final == 4 ou final == 5){
      escreva("tudo exceto quarta")
    }senao se(final == 6 ou final == 7){
      escreva("tudo exceto quinta")
    }senao se(final == 8 ou final == 9){
      escreva("tudo exceto sexta")
    }senao{
      escreva("???")
    }
  }
}
