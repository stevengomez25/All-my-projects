Algoritmo intercambiarAYB
	definir a, b, c Como Caracter
	escribir "Ingrese el primer t�rmino: "
	leer a
	escribir "Ahora el segundo: "
	leer b 
	c = "1"
	procedimiento_intercambiar(a,b,c)
	escribir "el primer termino es ", a,", el segundo t�rmino es ",b
FinAlgoritmo
SubProceso procedimiento_intercambiar(a Por Referencia, b Por Referencia, c Por Valor)
	c = a
	a = b 
	b = c
FinSubProceso
	