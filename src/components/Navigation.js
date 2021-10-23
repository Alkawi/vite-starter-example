import { createElement } from '../lib/dom.js'
import './Navigation.css'

export default function Navigation() {
  const el = createElement(
    'nav',
    { className: 'Navigation' },
    createElement('button', {
      className: 'Navigation__button Navigation__button--active',
      innerText: 'Characters',
    }),
    createElement('button', {
      className: 'Navigation__button',
      innerText: 'Locations',
    })
  )
  return el
}
