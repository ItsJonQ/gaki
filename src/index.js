import { Component } from 'react'
import createStore from 'unistore'
import { Provider } from 'unistore/preact'
import Router from 'preact-router'
import Episode from './containers/Episode'
import data from './data'

import './style'

const store = createStore({data})

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Episode path='/v/:segment/:season/episode/:id' />
        </Router>
        <div>
          <Episode />
        </div>
      </Provider>
    )
  }
}
