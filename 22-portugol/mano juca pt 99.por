programa {
  funcao inicio() {
    real vtotal, vdiaria, desconto10
    real desconto15, multa=150, vbruto
    inteiro dias

    escreva("quantos dias??? ")
    leia(dias)

    se(dias <= 5){
      vdiaria = 100
    }senao se(dias >= 6 e dias <= 10){
      vdiaria = 90
    }senao{
      vdiaria = 80
    }
    vbruto = dias * vdiaria
    desconto10 = vbruto * 0.1
    desconto15 = vbruto * 0.15
    vtotal = vbruto - desconto10 - desconto15 + multa

    escreva("\n====================")
    escreva("\nvalor bruto: " + vbruto)
    escreva("\ndesconto 1: " + desconto10)
    escreva("\ndesconto 2: " + desconto15)
    escreva("\nmulta: R$" + multa)
    escreva("\n--------------------")
    escreva("\ntotal: R$" + vtotal)
    escreva("\n====================")
  }
}
