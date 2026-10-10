async function buscarPeliculas(title) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`
    const respuesta = await fetch(url)
    console.log(respuesta)

    const datos = await respuesta.json()
    console.log(datos)
}

buscarPeliculas("Batman")