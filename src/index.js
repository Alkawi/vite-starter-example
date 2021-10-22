import './styles/index.css'
import { getBySelector } from './lib/dom.js'
import Header from './components/Header.js'

const appContainer = getBySelector('#app')

const header = Header()
appContainer.append(header)
