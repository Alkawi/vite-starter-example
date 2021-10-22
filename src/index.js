import './styles/index.css'
import { getBySelector } from './lib/dom.js'
import Header from './components/Header.js'
import Card from './components/Card.js'

const appContainer = getBySelector('#app')

const header = Header()
appContainer.append(header)

const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
  .then(res => res.json())
  .then(data => renderCards(data.results))

function renderCards(characters) {
  characters.forEach(({ name, image, location }) => {
    const card = Card({
      name: name,
      image: image,
      location: location.name,
    })
    appContainer.append(card)
  })
}
