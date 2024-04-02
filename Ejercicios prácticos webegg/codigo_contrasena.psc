Algoritmo codigo_contrasena
	definir codigo, contrasena Como Real
	Hacer
		escribir "Ingrese su código de empleado: "
		leer codigo
		escribir "Ahora ingrese su contraseña: "
		leer contrasena
		si codigo <> 1024 o contrasena <> 4567 Entonces
			escribir "Codigo o contraseña incorrecto/as. Por favor, intente nuevamente."
		SiNo
			escribir "Acceso autorizado."
		FinSi
	Mientras Que codigo <> 1024 o contrasena <> 4567
FinAlgoritmo
