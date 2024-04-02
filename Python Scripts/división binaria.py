lista = [1,3,4,2,1,39,3,2,4,5,1,3,5,56,134,39]
valor = 56

def encontrar_valor(lista,valor):
    izquierda = 0
    derecha = len(lista)-1
    lista = sorted(lista)
    while izquierda <= derecha:
        medialist = (izquierda + derecha) // 2

        if lista[medialist] == valor:
            return medialist
        elif lista[medialist]<valor:
            izquierda = medialist + 1
        else:
            derecha = medialist - 1

    return -1

valor_encontrado = encontrar_valor(lista,valor)
if valor_encontrado != -1:
    print("El valor ", valor,"fue encontrado en la posición",valor_encontrado)
