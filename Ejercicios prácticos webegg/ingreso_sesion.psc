Funcion x <- login ( arg1, arg2)
	definir x Como Logico
	si arg1 = "usuario1" y arg2 = "asdasd" Entonces
		x = Verdadero
	SiNo
		x=Falso
	FinSi
Fin Funcion

Algoritmo ingreso_sesion
	definir username, password Como Caracter
	definir vueltas, num_intentos Como Real
	escribir "Ingrese su usuario por favor: "
	leer username
	escribir "Ingrese ahora su contraseña por favor: "
	leer password
	num_intentos=1
	Para vueltas<-1 Hasta 3 Con Paso 1 Hacer
		si login(username,password)= verdadero Entonces
			escribir "Ingreso de sesión exitoso!"
			vueltas = 3
		SiNo
			escribir "Contraseña o usuario incorrectos. intente nuevamente:"
			leer username
			leer password
			vueltas=vueltas+1
		FinSi
	Fin Para
	si login(username,password) = verdadero Entonces
		escribir "lo lograste!"
	SiNo
		escribir "Máximo de intentos fallidos"
	FinSi
FinAlgoritmo
