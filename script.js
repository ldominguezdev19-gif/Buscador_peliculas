async function buscarPeliculas(title) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&language=es-MX`
    const respuesta = await fetch(url)

    const datos = await respuesta.json()
    return(datos.results)
}

const formulario = document.getElementById("formulario")
const inputBusqueda = document.getElementById("nombre-peli")
const contenedorPeliculas = document.getElementById("contenedor")

formulario.addEventListener("submit", async function(submitEvent){
    submitEvent.preventDefault()
    const peliculas = await buscarPeliculas(inputBusqueda.value)
    contenedorPeliculas.innerHTML = peliculas.map(crearTarjeta).join("")
})


function crearTarjeta(pelicula){
    return`
        <article class="box-peli">
            <img
                src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"
                alt="${pelicula.title}"
                class="portada"
            />
            <span class="ratio">${pelicula.vote_average.toFixed(1)}</span>
            <div class="info">
                <h3 class="titulo-peli">${pelicula.title}</h3>
                <p class="descripcion-peli">${pelicula.overview}           
                </p>
            </div>
        </article>
    `
}
