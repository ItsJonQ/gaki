import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AX from '../AX'
import Grid from '../Grid'
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
      const { artwork, title, url, videoId } = episode

      return (
        <Grid.Col size={4}>
          <EpisodeCover
            {...{
              artwork,
              key: url,
              href: url,
              title
            }}
          />
        </Grid.Col>
      )
    })

    const { url: playUrl } = episodes[0]

    return (
      <div>
        <Cover {...{
          artwork,
          description,
          heading,
          playTitle: 'Watch',
          playUrl,
          title
        }} />
        <Grid.Container>
          <AX.NodeList render={(props) => {
            return (
              <Grid.Row {...props}>
                {episodesMarkup}
              </Grid.Row>
            )
          }} />
        </Grid.Container>
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
