programa
{
	funcao inicio()
	{
		// Variáveis
		real salario_mensal, valor_dia, valor_semana
		inteiro dias_trabalhados_mes

		// Entrada de dados
		escreva("Digite o salário mensal do Junin: R$ ")
		leia(salario_mensal)

		escreva("Quantos dias ele trabalhou no mês? ")
		leia(dias_trabalhados_mes)

		// Cálculos
		valor_dia = salario_mensal / dias_trabalhados_mes
		valor_semana = valor_dia * 5 // Bônus: escala 5x2 (5 dias de trampo)

		// Exibição dos resultados
		escreva("\n--- Resumo do Trampo do Junin ---")
		escreva("\nValor por dia trabalhado: R$ ", valor_dia)
		escreva("\nSalário semanal (escala 5x2): R$ ", valor_semana)
		escreva("\n---------------------------------\n")
	}
}
