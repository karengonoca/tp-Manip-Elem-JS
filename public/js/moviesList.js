let badi = document.querySelector('body');
let tituloPri = document.querySelector('h1');
let logoDH = document.querySelector('.logoDH');

/* let modo = confirm('Desea modo oscuro?')

if(modo){
    badi.style.backgroundColor = '#7f7f7f' 
    badi.classList.add('fondoMoviesList') 
} */

logoDH.addEventListener('mouseover', ()=>{
    badi.style.backgroundColor = '#7f7f7f' 
    badi.classList.add('fondoMoviesList')
})

tituloPri.textContent += 'LISTADO DE PELICULAS'

tituloPri.style.backgroundColor = 'teal'
tituloPri.style.color = 'white'
tituloPri.style.padding = '20px'

