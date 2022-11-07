let container = document.querySelector('.container');
let subtitulo = document.querySelector('.subtitulo');
let enlace = document.querySelector('a');
let parrafos = document.querySelectorAll('p');


let nombre = prompt('Ingrese su nombre');

if (!nombre) {
    subtitulo.textContent += 'invitado'
}else{
    subtitulo.textContent += nombre
}

subtitulo.style.textTransform = 'uppercase'

enlace.style.color = '#E51B3E'

let confirmacion = confirm('Desea colocar un fondo de pantalla?')

if (confirmacion) {
    document.querySelector('body').classList.add('fondo')
}

parrafos.forEach((parrafo, index) => {
    if (index % 2 === 0) {
        parrafo.classList.add('destacadoPar') 
    } else {
        parrafo.classList.add('destacadoImpar')
    }
});

container.style.display = 'block'

