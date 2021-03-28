import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobaStyles } from './styles/global'
import { defaultTheme } from './styles/themes'
import './i18n'
import { App } from './app'

ReactDOM.render(
<ThemeProvider theme={defaultTheme}>
  <App />
  <GlobaStyles />
</ThemeProvider>, document.getElementById('root'))
