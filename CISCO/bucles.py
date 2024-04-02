largest_number = -999999999999999

number_ingresed = int(input(f'escribe un número o escribe -1 para terminar: '))

while number_ingresed!= -1:
    if number_ingresed>largest_number:
        largest_number = number_ingresed
        number_ingresed = int(input(f'escribe un número o escribe -1 para terminar: '))
print(f'Programa terminado, el valor mayor ingresado hasta la terminación fue: {largest_number}')

counter = 20

while counter!=0:
    print(f'Dentro del bucle. {counter}')
    counter-=1
print(f'Fuera del bucle. {counter}')


secret_number = 777

print(
"""
    +================================+
    | ¡Bienvenido a mi juego, muggle!|
    | Introduce un número entero     |
    | y adivina qué número he        |
    | elegido para ti.               |
    |¿Cuál es el número secreto?     |
    +================================+
""")
number_entered = int(input())
while number_entered != secret_number:
    print(f'''
    +=====================================+
    |¡Ja, ja! ¡Estás atrapado en mi bucle!|
    +=====================================+
    ''')
    number_entered = int(input(f'Ingresa de nuevo otro número!'))
    
print(f'''
    +======================================+
    |¡Bien hecho, muggle! Eres libre ahora.|
    +======================================+
    ''')
