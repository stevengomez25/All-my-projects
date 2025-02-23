#Crear un programa que defina la distancia ente 2 puntos con dos ingresos por parte del usuario
import requests
from geopy import distance

api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
response = requests.get(api_url)
terremotos = response.json().get('features')
UserLat = float(input('Ingrese su latitud:'))
UserLon = float(input('Ingrese su longitud:'))
terremotos_dic = {}


for terremoto in terremotos:
    terremotos_dic[terremoto.get('id')] = {
        'Sitio' : terremoto.get('properties').get('title'),
        'coordenadas' : (
            terremoto.get('geometry').get('coordinates')[1],
            terremoto.get('geometry').get('coordinates')[0]
            )
    }

# print(terremotos_dic)

#Calcular la distancia: 
coords_1 = (UserLat, UserLon)
distancias = {}
for terremoto_id in terremotos_dic :
    coords_2 = terremotos_dic.get(terremoto_id).get('coordenadas')

    distancia = int (distance.geodesic(coords_1, coords_2).km)
    distancias[distancia] = terremoto_id

distancias_ordenadas = sorted(distancias.items())[:10]

terremotos_mas_cercanos = {id:distancia for distancia,id in distancias_ordenadas}

print(distancias_ordenadas)
print('*****************')
print(terremotos_mas_cercanos)

for terremoto_id in terremotos_mas_cercanos:
    titulo = terremotos_dic.get(terremoto_id).get('Sitio')
    distancia = terremotos_mas_cercanos.get(terremoto_id)
    print(
        f'{titulo} || {distancia} kilómetros'
    )

