import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import './index.css'
import { App } from './app'

render(document.getElementById('app')!, <App />)
