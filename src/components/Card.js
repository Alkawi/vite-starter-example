import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card({ image, name, location, status, species }) {
  const el = createElement(
    'section',
    {
      className: 'Card',
    },
    createElement('img', { className: 'Card__image', src: image, alt: '' }),
    createElement('h2', { innerText: name }),
    createElement('span', { innerText: `${status} and ${species}` }),
    createElement(
      'dl',
      {},
      createElement('dt', { innerText: 'Last known location: ' }),
      createElement('dd', { innerText: location.name }),
      createElement('dt', { innerText: 'First seen in: ' }),
      createElement('dd', { innerText: 'Rixty Minutes' })
    )
  )

  return el
}

export function locationCard({ name, type, dimension }) {
  const el = createElement(
    'section',
    { className: 'Card' },
    createElement('h2', { innerText: name }),
    createElement(
      'dl',
      {},
      createElement('dt', { innerText: 'Type: ' }),
      createElement('dd', { innerText: type }),
      createElement('dt', { innerText: 'Dimension ' }),
      createElement('dd', { innerText: dimension })
    )
  )

  return el
}
