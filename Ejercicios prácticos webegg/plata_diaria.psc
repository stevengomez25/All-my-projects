Funcion x <- pago ( arg1,arg2,arg3,arg4 )
	definir x, horadiurna, horanocturna como real 
	horadiurna = 90
	horanocturna = 125
	Segun arg1 Hacer
		"lunes":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"martes":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"miercoles":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"jueves":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"viernes":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"sabado":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		"domingo":
			si arg4 ="si" Entonces
				si arg2= "diurno" Entonces
					x = (arg3*horadiurna)+(arg3*horadiurna*10/100)
				SiNo
					si arg2="nocturno" Entonces
						x =(arg3*horanocturna)+(arg3*horanocturna*15/100)
					SiNo
						x=0
						escribir "Error algún valor ingresado no es válido"
					FinSi
				FinSi	
			SiNo
				si arg4= "no" Entonces
					si arg2= "diurno" Entonces
						x = (arg3*horadiurna)
					SiNo
						si arg2="nocturno" Entonces
							x =(arg3*horanocturna)
						SiNo
							x=0
							escribir "Error algún valor ingresado no es válido"
						FinSi
					FinSi
				SiNo
					x=0
					escribir "Error algún valor ingresado no es válido"
				FinSi
			FinSi
		De Otro Modo:
			x=0
			escribir "Error, ha escrito un día no válido"
	Fin Segun
	
Fin Funcion

Algoritmo plata_diaria
	definir name,dia, turno, festivo_o_no Como Caracter
	definir horas_trabajadas como real
	escribir "Bienvenido al sistema de pagos de la empresa CONFIMAS. Empiece ingresando su nombre: "
	leer name
	escribir "Ahora ingrese el tiempo trabajado en horas: "
	leer horas_trabajadas
	escribir "Siguiente el dia que hizo las horas: "
	leer dia
	escribir "El día era festivo o no? escriba si o no: "
	leer festivo_o_no
	escribir "Ahora el turno, si era diurno o nocturno: "
	leer turno
	name = Minusculas(name)
	dia=Minusculas(dia)
	festivo_o_no=Minusculas(festivo_o_no)
	turno=Minusculas(turno)
	escribir name," su pago será de: $",pago(dia,turno,horas_trabajadas,festivo_o_no)
FinAlgoritmo
