import { createElement } from '../lib/dom.js'
import './Header.css'

export default function Header() {
  const el = createElement('h1', {
    className: 'Header',
    innerText: 'Rick and Morty Library',
  })

  return el
}
