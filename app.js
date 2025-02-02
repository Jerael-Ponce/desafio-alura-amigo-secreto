let amigosSecretos = [];
let amigosSeleccionados = [];
let recursividad = true;
let amigoSeleccionado = ""

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value.toUpperCase(); //Obtiene el texto en el input amigo y lo pasa amayusculas
    if (nuevoAmigo == ""){//verifica que no este vacio el input
        alert("Por favor, inserte un nombre");
    }else if (amigosSecretos.includes(nuevoAmigo)){//Verifica que el nombre no este repetido
        alert(`No puedes repetir el amigo "${nuevoAmigo}"`);
    }else{
        amigosSecretos.push(nuevoAmigo);//Agrega al amigo al arreglo Amigos secretos
        console.log(`${amigosSecretos}`);//Imprime el nombre del amigo
    }
    actualizarLista();//Manda a actualizar la lista
    limpiarNombre();//Limpia la casilla de imput
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigosSecretos.length; i++) {
        lista.innerHTML += `<li>${amigosSecretos[i]}</li>`; // Agregar cada elemento como <li> en la lista
    }
}

function limpiarNombre(){
    document.querySelector('#amigo').value='';
}

function indiceAleatoreo(){
    let maxInidice = amigosSecretos.length; 
    console.log(maxInidice)
    return Math.floor(Math.random()*maxInidice)
}
function finalAmigos(){
    let indexAmigos=amigosSecretos.length-1;
    let indexSeleccionados =amigosSeleccionados.length-1;
    console.log(`Numero de amigos ${indexAmigos} y amigos seleccionados ${indexSeleccionados}`)
    if (indexAmigos==indexSeleccionados){
        alert (`Ya no hay mas amigos disponibles. Reinicie la pagina para otro formulario`)
        recursividad = false;
        document.getElementById("botonAmigo").setAttribute('disabled',true);
        document.getElementById('botonSorteo').setAttribute('disabled',true);
    }
}

function sortearAmigo(){
    if (amigosSecretos.length === 0){
        alert("No hay amigos para sortear");
    }else if (amigosSecretos.length <= 2){
        alert("Ingrese mas a migos para mejor funcionalidad");
    }else{
        if (recursividad){
            amigoSeleccionado =amigosSecretos[indiceAleatoreo()];
            if (amigosSeleccionados.includes(amigoSeleccionado)){
                finalAmigos();
                sortearAmigo();
                
            }else{
                amigosSeleccionados.push(amigoSeleccionado)
                console.log(`${amigoSeleccionado}`)
                relevarAmigo();
            }
    }
        
    }
}

function relevarAmigo(){
    let listaAmigo = document.getElementById("resultado");
    listaAmigo.innerHTML=`<li> Tu amigo secreto es <strong>${amigoSeleccionado}</strong></li>`;
}