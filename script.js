//TODO: Fetching data from API from (themoviedb.org)

const API_URL =
  'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=624800e6ad063d96e7db6c2e0c5b4eb1&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// search endpoint
const SEARCH_API =
  'http://api.themoviedb.org/3/search/movie?api_key=624800e6ad063d96e7db6c2e0c5b4eb1&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.results)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})
