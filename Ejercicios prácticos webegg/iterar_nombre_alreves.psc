Algoritmo iterar_nombre_alreves
	definir palabra Como Caracter
	definir vuelta, punto1, punto2 Como Real
	escribir "Ingrese la palabra a dividir de manera inversa :"
	leer palabra
	punto1 = longitud(palabra)-1
	punto2 = Longitud(palabra)-1
	para vuelta<-1 Hasta Longitud(palabra) Con Paso 1 Hacer
		escribir sin saltar Subcadena(palabra,punto1,punto2)," "
		punto1 = punto1-1
		punto2 = punto2-1
	Fin Para
FinAlgoritmo
