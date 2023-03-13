const config = {
    api_key: 'ec02c8ac3c316540d6c31b10f9dfbd50',
    api_base_url: 'https://api.themoviedb.org/3/'
}

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}

async function insertAPI() {
    const movies = await getPopularMovies()
    movies?.map(movie => renderSingleMovie(movie)).join("")
    alert("Inserido com sucesso")
}

function renderSingleMovie(movie) {

    const nome = movie?.title
    const resumo = movie?.overview
    const nota = movie?.vote_average
    const data = movie?.release_date

	let dados = {
		"resumo": resumo,
		"nota": nota,
		"data": data
	}

    let nomeJson = JSON.stringify(nome)
	let str = JSON.stringify(dados)

	localStorage.setItem(nomeJson, str)
}