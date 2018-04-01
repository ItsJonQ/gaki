import { connect } from 'unistore/preact'
import Episode from '../components/Episode'

const actions = store => ({})

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

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

  const title = `${episodeProps.segment} ${episodeProps.seriesSeason} - ${episodeProps.series}`

  const componentProps = {
    ...routeProps,
    ...getPrevNextEpisodeUrls({ segment, season, id: parseInt(id, 10), total: episodeProps.episodeCount }),
    episode: episodeProps.episodeNumber,
    episodeOf: episodeProps.episodeCount,
    title
  }

  return <Episode {...componentProps} />
}

const getEpisodeFromRoute = (data, { segment, season, id }) => {
  if (!data) return {}
  const episodeSegment = data[segment]
  if (!episodeSegment) return {}
  const episodeSeason = episodeSegment[`season-${season}`]
  if (!episodeSeason) return {}

  const { episodes, ...rest } = episodeSeason
  const episode = episodes[id - 1]

  return {
    ...rest,
    ...episode
  }
}

const getEpisodeUrl = ({ segment, season, id }) => {
  return `/v/${segment}/${season}/episode/${id}/`
}

const getPrevNextEpisodeUrls = ({ segment, season, id, total }) => {
  const prev = id > 1 ? id - 1 : false
  const next = id < total ? id + 1 : false

  const prevUrl = prev !== false ? getEpisodeUrl({ segment, season, id: prev }) : null
  const nextUrl = next !== false ? getEpisodeUrl({ segment, season, id: next }) : null

  return {
    prev: prevUrl,
    next: nextUrl
  }
}

export default connect(mapStateToProps, actions)(Route)
