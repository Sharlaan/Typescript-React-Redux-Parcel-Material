import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Router } from '@reach/router'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import Home from './components/Home'
import store from './redux/store'
import customTheme from './theme'

const hookEl = document.getElementById('root')

const RootTree = (
  <MuiThemeProvider theme={customTheme}>
    <CssBaseline />
    <StoreProvider store={store}>
      <Router>
        <Home path="/" />
      </Router>
    </StoreProvider>
  </MuiThemeProvider>
)

render(RootTree, hookEl)
