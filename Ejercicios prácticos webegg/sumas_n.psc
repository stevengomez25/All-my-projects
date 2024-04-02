Funcion x <- sumas_divisores ( argumento )
	definir x,g como real
	x = 0
	Para g<-1 Hasta argumento-1 Con Paso 1 Hacer
		si argumento%g=0 Entonces
			x=x + g
		sino 
			x = x
		FinSi
	Fin Para
Fin Funcion

Algoritmo sumas_n
	definir numero_ingresado como real
	escribir "Ingrese un número, el sistema determinará la suma de sus divisores exceptuandose el mismo: "
	leer numero_ingresado
	escribir "El total de los divisores de ",numero_ingresado," es de: ",sumas_divisores(numero_ingresado)
FinAlgoritmo
