programa {
  funcao inicio() {
    // CRIAÇÃO
    inteiro clt, estagiarios, pj, total

    // LEITURA
    escreva("qtd clts: ")
    leia(clt)
    escreva("qtd estagiarios: ")
    leia(estagiarios)
    escreva("qtd pjs: ")
    leia(pj)

    // CÁLCULO
    total = clt + estagiarios + pj

    // EXIBIÇÃO
    escreva("\n-----------------")
    escreva("\ntotal de devs: " + total)
    escreva("\n-----------------")
  }
}
