programa {
  funcao inicio() {
    // CRIAÇÃO
    inteiro qtdrelatoriosPF, qtdrelatoriosPJ
    inteiro temporelatoriosPF, temporelatoriosPJ
    real valortotalPF, valortotalPJ

    inteiro qtdtotal, tempototal
    real valortotal
    real mediavalorPF, mediavalorPJ
    real mediatempoPF, mediatempoPJ

    // LEITURA
    escreva("qtd de relatorios pf: ")
    leia(qtdrelatoriosPF)
    escreva("qtd de relatorios pj: ")
    leia(qtdrelatoriosPJ)
    escreva("tempo gasto pf(hrs): ")
    leia(temporelatoriosPF)
    escreva("tempo gasto pj(hrs): ")
    leia(temporelatoriosPJ)
    escreva("valor total pf: R$")
    leia(valortotalPF)
    escreva("valor total pj: R$")
    leia(valortotalPJ)

    // CÁLCULOS
    // cálculo I
    qtdtotal = qtdrelatoriosPF + qtdrelatoriosPJ
    // cálculo II
    tempototal = temporelatoriosPF + temporelatoriosPJ
    // cálculo III
    valortotal = valortotalPF + valortotalPJ
    // cálculo IV
    mediavalorPF = valortotalPF / qtdrelatoriosPF
    // cálculo V
    mediavalorPJ = valortotalPJ / qtdrelatoriosPJ
    // cálculo VI
    mediatempoPF = temporelatoriosPF / qtdrelatoriosPF
    //cálculo VII
    mediavalorPJ = temporelatoriosPJ / qtdrelatoriosPJ

    // EXIBIÇÃO
    escreva("\nqtd total pf e pj: " + qtdtotal)
    escreva("\ntempo total pf e pj em hrs: " + tempototal)
    escreva("\nvalor total pf e pj: R$" + valortotal)
    escreva("\nmedia valor pf: R$" + mediavalorPF)
    escreva("\nmedia valor pj: R$" + mediavalorPJ)
    escreva("\nmedia tempo pf em hrs: " + mediatempoPF)
    escreva("\nmedia tempo pj em hrs: " + mediatempoPJ)
  }
}
