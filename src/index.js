import { Component } from 'react'
import createStore from 'unistore'
import { Provider } from 'unistore/preact'
import Episode from './containers/Episode'
import './style'

const store = createStore({ title: 0 })

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Episode />
        </div>
      </Provider>
    )
  }
}
