Algoritmo sin_titulo
	definir hoja_caracter, solicitud_ejecutiva Como Caracter
	definir correos_sin_leer Como Entero
	escribir "Ingrese primero (si) si realiz� la hoja de c�lculo, de lo contrario escriba (no): "
	leer hoja_caracter
	si hoja_caracter == "si" entonces
		escribir "Ingrese el n�mero de correos sin leer en la bandeja de entrada: "
		leer correos_sin_leer
		si correos_sin_leer < 10 Entonces
			Escribir "Las tareas a realizar son: "
			Escribir "1.Revisar Correo de voz buscando solicitudes de ejecutivos"
			Escribir "�Hay alguna solicitud ejecutiva?"
			leer solicitud_ejecutiva
			si solicitud_ejecutiva =="si" Entonces
				escribir "2.Realizar solicitudes a menos que haya alguna de emergencia"
				Escribir "3.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "4.Regar las plantas"
			SiNo
				Escribir "2.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "3.Regar las plantas"
			FinSi
		SiNo
			Escribir "Las tareas a realizar son: "
			Escribir "1.Revisar Correos hasta que el n�mero de ellos sin leer sea menor a 10"
			Escribir "2.Revisar Correo de voz buscando solicitudes de ejecutivos"
			Escribir "�Hay alguna solicitud ejecutiva?"
			leer solicitud_ejecutiva
			si solicitud_ejecutiva =="si" Entonces
				escribir "3.Realizar solicitudes a menos que haya alguna de emergencia"
				Escribir "4.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "5.Regar las plantas"
			SiNo
				Escribir "3.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "4.Regar las plantas"
			FinSi
		FinSi
	SiNo
		escribir "Ingrese el n�mero de correos sin leer en la bandeja de entrada: "
		leer correos_sin_leer
		si correos_sin_leer < 10 Entonces
			Escribir "Las tareas a realizar son: "
			Escribir "1.Completar la hoja de calculos mensuales"
			Escribir "2.Revisar Correo de voz buscando solicitudes de ejecutivos"
			Escribir "�Hay alguna solicitud ejecutiva?"
			leer solicitud_ejecutiva
			si solicitud_ejecutiva =="si" Entonces
				escribir "3.Realizar solicitudes a menos que haya alguna de emergencia"
				Escribir "4.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "5.Regar las plantas"
			SiNo
				Escribir "3.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "4.Regar las plantas"
			FinSi
		SiNo
			Escribir "Las tareas a realizar son: "
			escribir "1.Completar la hoja de calculos mensuales"
			Escribir "2.Revisar Correos hasta que el n�mero de ellos sin leer sea menor a 10"
			Escribir "3.Revisar Correo de voz buscando solicitudes de ejecutivos"
			Escribir "�Hay alguna solicitud ejecutiva?"
			leer solicitud_ejecutiva
			si solicitud_ejecutiva =="si" Entonces
				escribir "4.Realizar solicitudes a menos que haya alguna de emergencia"
				Escribir "5.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "6.Regar las plantas"
			SiNo
				Escribir "4.Iniciar sesi�n con usuario de administrador y enviar un correo de actualizaci�n"
				Escribir "5.Regar las plantas"
			FinSi
		FinSi
	FinSi
		
FinAlgoritmo
