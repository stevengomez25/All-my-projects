Algoritmo sin_titulo
	definir nota1, nota2, nota3 como real
	definir validador1, validador2, validador3 Como Logico
	escribir "Ingrese la nota a verificar: "
	leer nota1
	escribir "Ingrese la nota a verificar: "
	leer nota2
	escribir "Ingrese la nota a verificar: "
	leer nota3
	validador1 = nota1>=1 y nota1<=10
	si validador1 = Verdadero Entonces
		validador1 =nota2>=1 y nota2<=10
		si validador1 =Verdadero Entonces
			validador1 =nota3>=1 y nota3<=10
			si validador1 =verdadero Entonces
				escribir "Los tres valores son correctos"
			SiNo
				escribir "El tercer valor es incorrecto"
			FinSi
		SiNo
			escribir "El segundo valor ingresado es incorrecto"
		FinSi
	SiNo
		escribir "El primer valor es incorrecto"
	FinSi
FinAlgoritmo
