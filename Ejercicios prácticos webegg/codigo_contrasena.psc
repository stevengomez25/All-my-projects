Algoritmo codigo_contrasena
	definir codigo, contrasena Como Real
	Hacer
		escribir "Ingrese su c�digo de empleado: "
		leer codigo
		escribir "Ahora ingrese su contrase�a: "
		leer contrasena
		si codigo <> 1024 o contrasena <> 4567 Entonces
			escribir "Codigo o contrase�a incorrecto/as. Por favor, intente nuevamente."
		SiNo
			escribir "Acceso autorizado."
		FinSi
	Mientras Que codigo <> 1024 o contrasena <> 4567
FinAlgoritmo
