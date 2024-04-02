numerosPrimos=[]
x=int(input("inserte aqui el valor a determinar===  "))
while x >=0:
    if (x%2)!=0: 
        for i in range(2,x):
            if x%i!=0:
                numerosPrimos.append(i)
                print("holi")
            else:
                print(f'el número no tiene división entre dos, sin embargo si tiene divisor a parte del {x}')
        x=int(input("inserte aqui el valor a determinar===  "))
    else:
        print(f'el número {x} es par, por lo cual no es primo')
        x=int(input("inserte aqui el valor a determinar===  "))