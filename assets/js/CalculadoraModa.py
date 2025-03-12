def calcular_moda(lista):
    frequencias = {}
    for num in lista:
        frequencias[num] = frequencias.get(num, 0) + 1

    maior_frequencia = max(frequencias.values())
    modas = [
        num for num, freq in frequencias.items() if freq == maior_frequencia
    ]

    return modas[0]  # Retorna apenas a primeira moda


# Solicita a entrada do usuário
entrada = input().strip()
dados = list(map(int, entrada.split()))

# Calcula a moda
moda = calcular_moda(dados)

# Exibe o resultado
print(moda)
