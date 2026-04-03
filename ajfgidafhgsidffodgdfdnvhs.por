programa {
  funcao inicio() {
    // CRIAÇÃO
    inteiro tamanhoprompt
    inteiro totaltokens
    real custoportoken = 0.151, totalrs

    // LEITURA
    escreva("tamnanho prompt: ")
    leia(tamanhoprompt)

    // CÁLCULO
    totaltokens = tamanhoprompt + 5
    totalrs = totaltokens * custoportoken

    // EXIBIÇÃO
    escreva("\ntotal tokens: " + totaltokens)
    escreva("\nvalor: R$" + totalrs)
  }
}
