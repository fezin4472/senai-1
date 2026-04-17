programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    inteiro drawn
    inteiro randomuno = 1
    inteiro randomdos = 10
    inteiro random

    escreva("digite um numero de 1 a 10: ")
    leia(drawn)

    random = u.sorteia(randomuno, randomdos)

    se(drawn == random){
      escreva("acertou")
    }senao{
      escreva("ERRRRRRROOOOOOOOOOOOOOOOOOOU")
    }
  }
}
