programa
{
	funcao inicio()
	{
		// Declaração de variáveis
		real gastos, ingressos, itens, faturamentoTotal, lucroReais, lucroPercentual

		// Entrada de dados
		escreva("Quanto foi gasto em suprimentos e mercadorias? R$ ")
		leia(gastos)

		escreva("Quanto foi o faturamento em venda de ingressos? R$ ")
		leia(ingressos)

		escreva("Quanto foi o faturamento em venda de itens? R$ ")
		leia(itens)

		// Cálculos
		faturamentoTotal = ingressos + itens
		lucroReais = faturamentoTotal - gastos

		// Cálculo do lucro percentual sobre o faturamento
		se (faturamentoTotal > 0) {
			lucroPercentual = (lucroReais / faturamentoTotal) * 100
		} senao {
			lucroPercentual = 0.0
		}

		// Saída de resultados
		escreva("\n--- RELATÓRIO DO CAPITÃO GANSO ---")
		escreva("\nLucro obtido: R$ ", lucroReais)
		escreva("\nLucro percentual: ", lucroPercentual, "%")
		escreva("\n----------------------------------")
	}
}
