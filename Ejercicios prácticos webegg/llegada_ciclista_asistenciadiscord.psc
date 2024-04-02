Algoritmo sin_titulo
	definir demora, h1, m1,s1,tts,h2,m2,s2 como entero
	escribir "Inserte el tiempo que toma llegar de una ciudad a otra en segundos: "
	leer demora
	escribir "Insterte ahora el tiempo en hora, minutos y segundos, de la partida del ciclista: "
	escribir "hora: "
	leer h1
	escribir "minuto: "
	leer m1
	escribir "segundo: "
	leer s1
	tts = h1*3600+m1*60+s1+demora
	h2 = trunc(tts/3600)
	m2 = trunc((tts-(h2*3600))/60)
	s2 = trunc(tts-((h2*3600)+(m2*60)))
	Escribir "Corredor, su tiempo estimado es a las: ",h2,":",m2,":",s2
FinAlgoritmo
