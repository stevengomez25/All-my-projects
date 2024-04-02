numero_ingresado = int(input(f'ingrese el número aquí: '))
c0 = numero_ingresado
step = 0
while c0 >1:
    while c0 % 2 == 0:
        c0 = c0 / 2
        print(int(c0))
        step = step + 1 
    else:
        if c0 != 1:
            c0 = 3 * c0 + 1
            print(int(c0))
            step = step + 1 
        else:
            break 
else:
    print(int(c0))
print("número de pasos",step)
