import './styles/index.css'
import { createElement, getBySelector } from './lib/dom.js'
import CharactersPage from './pages/CharactersPage'
import Navigation from './components/Navigation.js'
import LocationsPage from './pages/LocationsPage'

const charactersPage = CharactersPage()
const locationsPage = LocationsPage()

const app = createElement(
  'main',
  null,
  Navigation({ onClick: handleClick }),
  charactersPage,
  locationsPage
)

getBySelector('#app').append(app)

function handleClick(route) {
  charactersPage.classList.toggle('hidden', route !== 'characters')
  locationsPage.classList.toggle('hidden', route !== 'locations')
}
