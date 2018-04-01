import React, { Component } from 'react'
import { Link } from 'preact-router/match'
import Cover from '../Cover'
import PropTypes from 'prop-types'

class Season extends Component {
  render () {
    const {
      artwork,
      description,
      episodes,
      season,
      segment,
      title
    } = this.props

    const heading = `${segment} - ${season}`
    const episodesMarkup = episodes.map(episode => {
      const { title, url } = episode
      return (
        <Link href={url} key={url}>{title}</Link>
      )
    })

    return (
      <div>
        <Cover {...{ artwork, heading, title, description }} />
        {episodesMarkup}
      </div>
    )
  }
}

Season.propTypes = {
  /**
   * A list of episodes
   */
  episodes: PropTypes.array
}

export default Season
