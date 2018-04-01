import React from 'react'
import { connect } from 'unistore/preact'
import Episode from '../components/Episode'
import {
  getEpisodeFromRoute,
  getEpisodeUrl,
  getPrevNextEpisodeUrls,
  getEpisodeTitle
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

  const episodeProps = getEpisodeFromRoute(data, { segment, season, id })
  const routeProps = {
    ...rest,
    ...episodeProps
  }
  const episodeOf = episodeProps.episodeOf

  const title = getEpisodeTitle({
    segment: episodeProps.segment,
    season,
    series: episodeProps.series,
    id: episodeProps.episodeNumber,
    total: episodeOf
  })

  const componentProps = {
    ...routeProps,
    ...getPrevNextEpisodeUrls({ segment, season, id: parseInt(id, 10), total: episodeOf }),
    episode: episodeProps.episodeNumber,
    episodeOf,
    title
  }

  return <Episode {...componentProps} />
}

const actions = store => ({})
const mapStateToProps = (state) => ({ data: state.data })

export default connect(mapStateToProps, actions)(Route)
