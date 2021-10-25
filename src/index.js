import './styles/index.css'
import { createElement, getBySelector } from './lib/dom.js'
import CharactersPage from './pages/CharactersPage'
import Navigation from './components/Navigation.js'

const charactersPage = CharactersPage()

/*const episodeUrls = [
  'https://rickandmortyapi.com/api/episode',
  'https://rickandmortyapi.com/api/episode?page=2',
  'https://rickandmortyapi.com/api/episode?page=3',
]*/
/*
const locationUrls = [
  'https://rickandmortyapi.com/api/location',
  'https://rickandmortyapi.com/api/location?page=2',
  'https://rickandmortyapi.com/api/location?page=3',
  'https://rickandmortyapi.com/api/location?page=4',
  'https://rickandmortyapi.com/api/location?page=5',
  'https://rickandmortyapi.com/api/location?page=6',
]
*/

const app = createElement(
  'main',
  null,
  Navigation({ onClick: handleClick }),
  charactersPage
)

getBySelector('#app').append(app)

function handleClick(route) {
  charactersPage.classList.toggle('hidden', route !== 'characters')
}
