import { createElement } from '../lib/dom.js'
import './Navigation.css'

export default function Navigation() {
  const el = createElement('nav', { className: 'Navigation' })
  return el
}
