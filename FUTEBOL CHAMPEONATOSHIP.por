programa {
  funcao inicio() {
   // declaração das variáveis
   inteiro vitorias, empates, total

   //entrega de dados
   escreva("digite o número de vitórias do time: ")
   leia(vitorias)
   
   escreva("agora os empates: ")
   leia(empates)

   //CÁLCULO DE PONTUAÇÃO (vitoria = 3 / empate = 1)
   total = (vitorias * 3) + (empates * 1)

   //EXIBIÇÃO
   escreva("\n--- TABELA PEBA CUP ---")
   escreva("\nvitórias: ", vitorias, " (", vitorias * 3, "pts)")
   escreva("\nempates: ", empates, " (", empates, "pts)")
   escreva("\n-----------------------")
   escreva("\n TOTAL NA TABELA: ", total)
  }
}
