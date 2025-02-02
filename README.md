<h1> Amigo secreto </h1>
Este es el primer desafio del curso Principiante en Programación G8 - ONE.
El objetivo de esta aplicacion es permitirle al usuario ingresar nombres de sus amigos en una lista para luego realizar un sorteo aleatorio y determinar quien es tu "amigo secreto". Ideal para facilitar la seleccion de amigos en intercambios de regalos.


## Instalación y uso

1.-Clona este repositorio:

  git clone https://github.com/Jerael-Ponce/desafio-alura-amigo-secreto.git

2.-Abre el archivo index.html en tu navegador.

3.-Ingresa los nombres de los participantes en el campo de texto y presiona el botón "Agregar".

4.-Una vez ingresados todos los participantes, cada uno debe presionar el boton "Sortear" para saber quien es su amigo secreto.

5.-Los resultados se mostrarán en pantalla.

## :hammer:Funcionalidades del proyecto
-Permite agregar amigos a la lista.

-Evita nombres duplicados.

-Muestra la lista de amigos agregados.

-Realiza el sorteo de manera aleatoria.

-Verifica que no haya repeticiones en la selección.

-Deshabilita los botones cuando se completa el sorteo.

## Funciones principales

` agregarAmigo() `

-Obtiene el nombre ingresado y lo convierte en mayúsculas.

-Verifica que el nombre no esté vacío ni repetido.

-Agrega el nombre a la lista y actualiza la interfaz.

`actualizarLista()`

-Muestra en la interfaz los nombres de los participantes registrados.

`indiceAleatoreo()`

-Genera un índice aleatorio dentro del rango de nombres disponibles.

`sortearAmigo()`

-Selecciona aleatoriamente un amigo secreto y lo muestra en pantalla.

-Asegura que no se repitan selecciones.

`finalAmigos()`

-Verifica si todos los amigos ya han sido seleccionados.

-Deshabilita los botones una vez que el sorteo ha finalizado.
