import React from 'react'
import { connect } from 'unistore/preact'
import Season from '../components/Season'
import {
  getSeasonFromRoute,
  getEpisodeUrl,
  getPrevNextEpisodeUrls
} from './utils'

const Route = props => {
  const {
    data,
    matches,
    path,
    ...rest
  } = props
  const {
    id,
    season,
    segment
  } = matches

  const seasonProps = getSeasonFromRoute(data, { segment, season, id })
  const episodes = [...seasonProps.episodes].map(episode => ({
    ...episode,
    url: getEpisodeUrl({ segment, season, id: episode.episodeNumber }),
    title: `Part ${episode.episodeNumber}`
  }))

  const componentProps = {
    ...seasonProps,
    episodes,
    season: seasonProps.seriesSeason,
    title: seasonProps.series
  }

  return <Season {...componentProps} />
}

const actions = store => ({})
const mapStateToProps = (state) => ({ data: state.data })

export default connect(mapStateToProps, actions)(Route)
