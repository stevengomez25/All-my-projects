Algoritmo programa_recicladora
	definir user, password, respuesta Como Caracter
	definir attempts, bottles, bottles_number, peso, total_a_pagar, intentosrespuesta, saldo Como real
	Escribir "Ingrese su usuario y contraseña: "
	saldo = Aleatorio(3000,10000)
	total_a_pagar = 0
	leer user
	leer password
	Para attempts<-1 Hasta 3 Con Paso 1 Hacer
		Si user =="Albus_D" y password =="caramelosDeLimon"  Entonces
			escribir "Gracias por verificar el filtro de seguridad."
			Escribir "Por favor, ingrese cuantas botellas necesita registrar para el pago: "
			leer bottles
			Para bottles_number<-1 Hasta bottles Con Paso 1 Hacer
				peso = Aleatorio(100,3000)
				si peso <= 500 Entonces
					total_a_pagar = total_a_pagar + 50
				SiNo
					si peso >=501 y peso <=1500 Entonces
						total_a_pagar = total_a_pagar + 125
					SiNo
						total_a_pagar = total_a_pagar + 200
					FinSi
				FinSi
			Fin Para
			escribir "Estimado ", user, ", el valor a ofrecer es de: $",total_a_pagar
			escribir "¿Desea aceptar el pago o retornar el material?"
			escribir "Para aceptar escriba A, de lo contrario escriba D"
			leer respuesta
			respuesta = Mayusculas(respuesta)
			Para intentosrespuesta<-1 Hasta 3 Con Paso 1 Hacer
				Si respuesta = "A" Entonces
					escribir "Gracias por usar nuestros servicios, su dinero se acreditará en su cuenta bancaria y la verá reflejada en los próximos 3 días hábiles"
					escribir "Sus fondos con nosotros incluyendo la ultima oferta son de: $",saldo+total_a_pagar
					intentosrespuesta = 3
					attempts = 3
				SiNo
					si respuesta = "D" Entonces
						escribir "Gracias por usar nuestros servicios. Por favor, tome su material de vuelta en la bandeja dispensadora."
						escribir "Su saldo actual quedará intacto, el cual es de: $",saldo
						intentosrespuesta = 3
					SiNo
						escribir "Respuesta inválida. Por favor, ingrese A para aceptar el pago o D para declinarlo:"
						intentosrespuesta = intentosrespuesta + 1
					FinSi
				Fin Si
			Fin Para
			
		SiNo
			escribir "tiene ", 3 - attempts," Intentos más."
			leer user
			leer password
			si attempts = 3 Entonces
				escribir "Máximo de intentos excedido. Gracias por usar nuestro programa."
			FinSi
		Fin Si
	Fin Para
FinAlgoritmo
