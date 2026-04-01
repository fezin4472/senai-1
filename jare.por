programa {
  funcao inicio() {
    inteiro scanias
    real lucroporscania, lucrototal
    lucroporscania = (90*50) - 450
    // escreva(lucroporscania)
    escreva("numero de scania jacarés (111s): ")
    leia(scanias)
    lucrototal = lucroporscania * scanias
    escreva("LUCRO TEMPORADA = " + lucrototal + " PAU")
  }
}
