print("++++++++++++++++")
print("conversor de putas")
print("++++++++++++++++\n")

print("menú de opciones:\n")
print("presiona 1 para convertir de palabra a número \n")
print("presiona 2 para convertir de número a palabra \n")

opcion=int(input("¿Cúal es la opción deseada?:"))
if opcion==1:
    print("\n conversor de palabra a número\n")
    opcion_uno=str(input("\n ingrese la palabra a convertir \n"))
    opcion_uno=opcion_uno.upper()
    if opcion_uno == "UNO":
        print("\n el número es 1\n")
    elif opcion_uno=="DOS":
        print("\n el número es 2\n")
    elif opcion_uno=="TRES":
        print("\n el número es 3\n")
    else:
        input("\nel programa detectó un valor inválido, presione enter para salir\n")
elif opcion==2:
    print("\n conversor de número a palabra\n")
    opcion_dos=int(input("\n inserte el número a convertir\n"))

    if opcion_dos == 1 :
         print("\n el número es UNO\n")
    elif opcion_dos ==2:
         print("\n el número es DOS\n")
    elif opcion_dos==3:
         print("\n el número es TRES\n")
    else:
        input("\nel programa detectó un valor inválido, presione enter para salir\n")
else:
        input("\nel programa detectó un valor inválido, presione enter para salir\n")
input("\npress enter to exit\n")











