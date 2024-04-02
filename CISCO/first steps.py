ingreso_ciudadano = float(input(f'Ingrese aquí su ingreso anual para calcular su impuesto: '))
impuesto_menor = (ingreso_ciudadano*18/100)-556.02
impuesto_mayor = 14839.02+((ingreso_ciudadano-85528)*32/100)

if ingreso_ciudadano <=85528:
    if impuesto_menor>=0:
        print(f'su impuesto es: ${impuesto_menor}')
    else:
         print(f'su impuesto es: $0.0')   
elif ingreso_ciudadano >85528:
    print(f'su impuesto es: ${impuesto_mayor}')


año_ingresado = int(input(f'Ingrese el año a verificar: '))
if año_ingresado>=1582:
    if año_ingresado%4==0:
        if año_ingresado%100!=0:
            print(f'{año_ingresado} es un año bisiesto!')
        else:
            if año_ingresado%400!=0:
                print(f'{año_ingresado} es un año común')
            else:
                print(f'{año_ingresado} es un año bisiesto!')
    else:
        print(f'{año_ingresado} es un año común')
else:
    print(f'{año_ingresado} no dentro del período del calendario gregoriano')
