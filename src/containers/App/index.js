import React, { Component } from 'react'
import { Provider } from 'unistore/preact'
import Router from 'preact-router'
import Season from '../Season'
import Episode from '../Episode'
import store from '../../store'
import styles from './styles.css'
import '@awesomecss/animations/dist/animations.css'
import './globalVariables.css'
import './globalStyles.css'

if (module.hot) {
  require('preact/debug')
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div id='Gaki' className={styles.App}>
          <Router>
            <Season path='/:segment/:season' />
            <Episode path='/:segment/:season/:id' />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
