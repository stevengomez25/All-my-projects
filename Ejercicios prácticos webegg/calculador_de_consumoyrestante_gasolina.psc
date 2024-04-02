Algoritmo sin_titulo
	definir LitrosDeCombustibleCargados como real
	definir Kilometros_recorridos Como Real
	definir gasolina_utilizada Como Real
	definir gasolina_restante Como Real
	escribir "Buen día, este programa le ayudará a conocer cuanto ha sido su consumo de  combustible y cuanto le queda por usar"
	escribir "Para comenzar, necesitamos unos datos. Primero, ¿Cuanto Combustible en Litros se abastecieron?"
	leer LitrosDeCombustibleCargados
	Escribir "Gracias. Ahora necesitaremos los kilómetros que ya ha recorrido desde la última reabastecida"
	Leer Kilometros_recorridos
	gasolina_utilizada = Kilometros_recorridos / 10
	gasolina_restante = LitrosDeCombustibleCargados - gasolina_utilizada
	Escribir " La gasolina utilizada fue ", gasolina_utilizada," Litros, basandose en un consumo de 10Lt/km"
	Escribir "La gasolina restante es ", gasolina_restante, " Litros, basandose en un consumo de 10Lt/km"
FinAlgoritmo

	