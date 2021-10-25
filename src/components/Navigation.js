import { createElement } from '../lib/dom.js'
import './Navigation.css'

export default function Navigation({ onClick }) {
  const el = createElement(
    'nav',
    { className: 'Navigation' },
    createElement('button', {
      className: 'Navigation__button',
      innerText: 'Characters',
      onclick: () => onClick('characters'),
    }),
    createElement('button', {
      className: 'Navigation__button',
      innerText: 'Locations',
      onclick: () => onClick('locations'),
    })
  )
  return el
}
