Algoritmo paroimparoninguno
	Definir n1 como entero
	escribir "Bienvenido al programa de validaci�n de par o impar. Ingrese el n�mero a verificar: "
	leer n1
	si n1<>0 y n1%2=0 Entonces
		escribir "El n�mero recibido fue ",n1,", y es un n�mero par."
	SiNo
		si n1=0 Entonces
			escribir "El n�mero recibido fue ",n1,", y no es un n�mero par ni impar."
		SiNo
			escribir "El n�mero recibido fue ",n1,", y es un n�mero impar."
		FinSi
	FinSi
FinAlgoritmo