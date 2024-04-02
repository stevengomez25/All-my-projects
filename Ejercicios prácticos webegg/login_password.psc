Funcion x <- verify_identity ( arg1 Por Referencia, arg2 Por Referencia, arg3 Por Referencia )
	definir x Como Logico
	si arg1 = "usuario1" y arg2 = "asdasd" Entonces
		si arg3 = 3 Entonces
			x = falso
		SiNo
			x = Verdadero
		FinSi
	SiNo
		si arg3 = 3 Entonces
			x = Falso
		SiNo
			x = falso 
			arg3 = arg3 + 1
		FinSi
	FinSi
Fin Funcion

Algoritmo login_password
	definir usuario, password como caracter
	definir attempts Como Real
	attempts = 0
	escribir "Bienvenido al login site de FEDRA. Ingrese su usuario: "
	leer usuario
	escribir "Ahora ingrese su contraseña: "
	leer password
	Mientras verify_identity(usuario,password,attempts) = falso Hacer
		escribir "Usuario o contraseña incorrectos. Intente nuevamente, ingrese su usuario: "
		leer usuario
		escribir "Ingrese su contraseña: "
		leer password
	Fin Mientras
	escribir "Gracias por verificar su identidad. Por favor ingrese ahora a la app."
FinAlgoritmo
