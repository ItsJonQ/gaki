import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppContainer from '../AppContainer'
import AX from '../AX'
import Grid from '../Grid'
import EpisodeCover from '../EpisodeCover'
import Cover from '../Cover'
import { getVideoSource } from '../../utilities/media'
import styles from './styles.css'

class Season extends Component {
  render () {
    const {
      artwork,
      backgroundCover,
      changeBackgroundCover,
      description,
      episodes,
      resetBackgroundCover,
      season,
      segment,
      title
    } = this.props

    const heading = `${segment} - ${season}`
    const episodesMarkup = episodes.map(episode => {
      const { artwork, title, url, videoId } = episode

      return (
        <Grid.Col className={styles.EpisodeCover} size={4}>
          <EpisodeCover
            {...{
              onMouseEnter: () => { changeBackgroundCover(artwork) },
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
      <AppContainer>
        <Cover {...{
          artwork: backgroundCover || artwork,
          description,
          heading,
          playTitle: 'Watch',
          playUrl,
          title
        }} />
        <Grid.Container onMouseLeave={resetBackgroundCover}>
          <Grid.Row seamless>
            {episodesMarkup}
          </Grid.Row>
        </Grid.Container>
      </AppContainer>
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
