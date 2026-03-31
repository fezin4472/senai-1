programa
{
	funcao inicio()
	{
		// Declaração de variáveis
		inteiro qtd_inicial, qtd_final, laranjas_vendidas

		// Entrada de dados
		escreva("--- Trajeto Pomar: Controle de Estoque ---\n")
		escreva("Digite a quantidade inicial de laranjas: ")
		leia(qtd_inicial)

		escreva("Digite a quantidade final de laranjas: ")
		leia(qtd_final)

		// Cálculo
		laranjas_vendidas = qtd_inicial - qtd_final

		// Saída do resultado
		escreva("\n---------------------------------------")
		escreva("\nTotal de laranjas vendidas no dia: ", laranjas_vendidas)
		escreva("\n---------------------------------------\n")
	}
}

