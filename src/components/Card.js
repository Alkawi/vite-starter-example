import { createElement } from '../lib/dom.js'
import './Card.css'

export default function Card() {
  const el = createElement('section', {
    className: 'Card',
    innerText: 'This is a card',
  })

  return el
}
