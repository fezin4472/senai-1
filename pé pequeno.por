programa
{
	funcao inicio()
	{
		// Variáveis
		real preco_par, valor_total
		inteiro quantidade_trocada

		// Entrada de dados
		escreva("Digite o preço de cada par de calçado (R$): ")
		leia(preco_par)

		escreva("Digite a quantidade de pares trocados: ")
		leia(quantidade_trocada)

		// Processamento
		valor_total = preco_par * quantidade_trocada

		// Saída
		escreva("\n--- Resumo do Vale-Troca ---")
		escreva("\nTotal de pares: ", quantidade_trocada)
		escreva("\nValor total a receber: R$ ", valor_total)
		escreva("\n----------------------------\n")
	}
}

