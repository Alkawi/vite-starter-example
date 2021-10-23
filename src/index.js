import './styles/index.css'
import { getBySelector } from './lib/dom.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import { locationCard } from './components/Card.js'
const appContainer = getBySelector('#app')

const header = Header()
appContainer.append(header)

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

/*const episodeUrls = [
  'https://rickandmortyapi.com/api/episode',
  'https://rickandmortyapi.com/api/episode?page=2',
  'https://rickandmortyapi.com/api/episode?page=3',
]*/

const locationUrls = [
  'https://rickandmortyapi.com/api/location',
  'https://rickandmortyapi.com/api/location?page=2',
  'https://rickandmortyapi.com/api/location?page=3',
  'https://rickandmortyapi.com/api/location?page=4',
  'https://rickandmortyapi.com/api/location?page=5',
  'https://rickandmortyapi.com/api/location?page=6',
]

//const episodeList = fetchAll(episodeUrls, 'episode')
const characterList = fetchAll(characterUrls, 'character')
const locationList = fetchAll(locationUrls, 'location')

//console.log(episodeList)
console.log(characterList)
console.log(locationList)

function renderCards(dataset, type) {
  if (type === 'character') {
    console.log(dataset)
    dataset.forEach(({ name, image, location, status, species }) => {
      const card = Card({
        name: name,
        image: image,
        location: location.name,
        status: status,
        species: species,
      })
      appContainer.append(card)
    })
  } else if (type === 'location') {
    dataset.forEach(({ name, type, dimension }) => {
      const card = locationCard({
        name: name,
        type: type,
        dimension: dimension,
      })
      appContainer.append(card)
    })
  }
}

function fetchAll(urlArray, type) {
  let allData = []
  urlArray.forEach(url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        allData.push(...data.results)
        if (data.info.count === allData.length) {
          renderCards(allData, type)
        }
      })
  })
  return allData
}
