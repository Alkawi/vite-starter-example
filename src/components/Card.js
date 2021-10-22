import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card({ image, name, location }) {
  const el = createElement(
    'section',
    {
      className: 'Card',
    },
    createElement('img', { className: 'Card__image', src: image, alt: '' }),
    createElement('h2', { innerText: name }),
    createElement('span', { innerText: 'Alive and Race' }),
    createElement(
      'dl',
      {},
      createElement('dt', { innerText: 'Last known location: ' }),
      createElement('dd', { innerText: location }),
      createElement('dt', { innerText: 'First seen in: ' }),
      createElement('dd', { innerText: 'Rixty Minutes' })
    )
  )

  return el
}
