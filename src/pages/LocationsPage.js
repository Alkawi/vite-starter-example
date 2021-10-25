import { locationCard } from '../components/Card'
import { createElement } from '../lib/dom'
import { fetchAll } from '../lib/utilities'
import './LocationsPage.css'

const locationUrls = [
  'https://rickandmortyapi.com/api/location',
  'https://rickandmortyapi.com/api/location?page=2',
  'https://rickandmortyapi.com/api/location?page=3',
  'https://rickandmortyapi.com/api/location?page=4',
  'https://rickandmortyapi.com/api/location?page=5',
  'https://rickandmortyapi.com/api/location?page=6',
]

export default function LocationsPage() {
  const el = createElement(
    'section',
    { className: 'LocationsPage' },
    createElement('h1', null, 'Locations')
  )

  fetchAll(locationUrls).then(res => addLocations(res))

  function addLocations(locations) {
    console.log(locations)
    const locationElements = locations.map(location => {
      return locationCard(location)
    })
    el.append(...locationElements)
  }

  return el
}
