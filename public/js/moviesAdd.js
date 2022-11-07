
let titulo = document.querySelector('h1')
let seccion = document.querySelector('section')
let articulo = document.querySelector('article')

titulo.textContent += 'AGREGAR PELICULAS'

titulo.classList.add('titulo')

articulo.classList.add('fondoTransparente')

seccion.classList.add('fondoCRUD')

titulo.addEventListener('mouseover', ()=>{
    titulo.style.color = 'red'
})
