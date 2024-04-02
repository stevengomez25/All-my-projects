Algoritmo sin_titulo
	definir palabra_ver como cadena
	definir ubicacion_final como entero
	escribir "Ingrese una palabra que inicie y termine con la mimsma letra, de lo contrario se arrojará INCORRECTO: "
	Leer palabra_ver
	ubicacion_final = longitud(palabra_ver)-1
	si subcadena(palabra_ver,0,0) == subcadena(palabra_ver,ubicacion_final,ubicacion_final) Entonces
		escribir "La palabra empieza y termina por la misma letra, por lo que es CORRECTO."
	SiNo
		escribir "INCORRECTO"
	FinSi
	
FinAlgoritmo
