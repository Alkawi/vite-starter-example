import Card from '../components/Card'
import { createElement } from '../lib/dom'
import { fetchAll } from '../lib/utilities'
import './CharactersPage.css'

const characterUrls = [
  'https://rickandmortyapi.com/api/character',
  'https://rickandmortyapi.com/api/character?page=2',
  'https://rickandmortyapi.com/api/character?page=3',
  'https://rickandmortyapi.com/api/character?page=4',
  'https://rickandmortyapi.com/api/character?page=5',
  'https://rickandmortyapi.com/api/character?page=6',
  'https://rickandmortyapi.com/api/character?page=7',
  'https://rickandmortyapi.com/api/character?page=8',
  'https://rickandmortyapi.com/api/character?page=9',
  'https://rickandmortyapi.com/api/character?page=10',
  'https://rickandmortyapi.com/api/character?page=11',
  'https://rickandmortyapi.com/api/character?page=12',
  'https://rickandmortyapi.com/api/character?page=13',
  'https://rickandmortyapi.com/api/character?page=14',
  'https://rickandmortyapi.com/api/character?page=15',
  'https://rickandmortyapi.com/api/character?page=16',
  'https://rickandmortyapi.com/api/character?page=17',
  'https://rickandmortyapi.com/api/character?page=18',
  'https://rickandmortyapi.com/api/character?page=19',
  'https://rickandmortyapi.com/api/character?page=20',
  'https://rickandmortyapi.com/api/character?page=21',
  'https://rickandmortyapi.com/api/character?page=22',
  'https://rickandmortyapi.com/api/character?page=23',
  'https://rickandmortyapi.com/api/character?page=24',
  'https://rickandmortyapi.com/api/character?page=25',
  'https://rickandmortyapi.com/api/character?page=26',
  'https://rickandmortyapi.com/api/character?page=27',
  'https://rickandmortyapi.com/api/character?page=28',
  'https://rickandmortyapi.com/api/character?page=29',
  'https://rickandmortyapi.com/api/character?page=30',
  'https://rickandmortyapi.com/api/character?page=31',
  'https://rickandmortyapi.com/api/character?page=32',
  'https://rickandmortyapi.com/api/character?page=33',
  'https://rickandmortyapi.com/api/character?page=34',
]

export default function CharactersPage() {
  const el = createElement(
    'section',
    { className: 'CharactersPage' },
    createElement('h1', null, 'Characters')
  )

  fetchAll(characterUrls).then(res => addCharacters(res))

  function addCharacters(characters) {
    const characterElements = characters.map(character => {
      return Card(character)
    })
    el.append(...characterElements)
  }

  return el
}
