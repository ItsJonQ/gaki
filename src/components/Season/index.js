import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AX from '../AX'
import EpisodeCover from '../EpisodeCover'
import Cover from '../Cover'
import { getVideoSource } from '../../utilities/media'

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
      const { title, url, videoId } = episode
      const artwork = getVideoSource(videoId).thumbnail

      return (
        <EpisodeCover
          {...{
            artwork,
            key: url,
            href: url,
            title
          }}
        />
      )
    })

    return (
      <div>
        <Cover {...{ artwork, heading, title, description }} />
        <AX.NodeList style={{ maxWidth: 960, margin: 'auto', padding: 40, overflow: 'hidden'}}>
          {episodesMarkup}
        </AX.NodeList>
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
