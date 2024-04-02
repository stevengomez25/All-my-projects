Algoritmo sin_titulo
	definir palabra_ver como cadena
	escribir "Ingrese una palabra que inicie con la letra A, de lo contrario se arrojará INCORRECTO: "
	Leer palabra_ver
	si subcadena(palabra_ver,0,0) =="A" o subcadena(palabra_ver,0,0) =="a" Entonces
		escribir "La palabra empieza con A, por lo que es CORRECTO."
	SiNo
		escribir "INCORRECTO"
	FinSi
	
FinAlgoritmo
