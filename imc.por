programa {
  funcao inicio() {
    real altura
    inteiro peso
    real imc

    escreva("digite seu peso em kg: ")
    leia(peso)
    escreva("agora a altura em metros: ")
    leia(altura)

    imc = peso / (altura * altura)

    se(imc <= 18.5){
      escreva("FAZ ACADEMIA MEU DEUS\n")
    }senao se(imc >= 18.5 e imc <= 24.9){
      escreva("não precisa fazer nada maz um pouco de academia é bom\n")
    }senao se(imc >= 25 e imc <= 29.9){
      escreva("PARA DE COMER FAST FOOD PMDS\n")
    }
    escreva(imc)
  }
}
