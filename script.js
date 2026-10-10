async function buscarPeliculas(title) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&language=es-MX`
    const respuesta = await fetch(url)

    const datos = await respuesta.json()
    return(datos.results)
}

const formulario = document.getElementById("formulario")
const inputBusqueda = document.getElementById("nombre-peli")
