for i in range(1,11):
    if i % 2 != 0:
        print(i)
    else:
        continue
print("cambiando el sentido")
for i in range(10,0,-1):
    if i % 2 != 0:
        print(i)
    else:
        continue

print("ahora con while")
x=1 
while x<11:
    if x%2 != 0:
        print(x)
    x = x+1
#no se necesita agregar un else para la otra acción, si no se define
#nada se hace pues

print("ahora iterar un correo hasta el sismbolo arroba")
for ch in "john.smith@pythoninstitute.org":
    if ch == "@":
        break
    print(ch,end="")

print("ahora iterar una cadena")
for digit in "0229339202939293":
    if digit == "0":
        digit = "x"
        print(digit,end="")
    else:
        print(digit,end="")

#corrección
print("\ncorreción optimizada")
for digit in "0229339202939293":
    if digit == "0":
        print("x",end="")
    print(digit,end="")
    
