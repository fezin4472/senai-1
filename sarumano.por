programa {
  funcao inicio() {

    // la bomba rm
    inteiro bombas_shows = 7

    // variáveis de entrada e dados
    inteiro shows, bombas
    real unitario, total

    // entrada
    escreva("quantidade dos marcados shows: ")
    leia(shows)

    escreva("preço unitario de las bombas: ")
    leia(unitario)

    // CÁLCULOS
    bombas = shows * bombas_shows
    total = bombas * unitario

    // EXIBICAO
    escreva("\nquantidade bombas: " + bombas)
    escreva("\ntotal dinheiro: " + total)
    
  }
}
