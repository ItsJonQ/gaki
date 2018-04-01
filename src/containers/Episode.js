import { connect } from 'unistore/preact'
import Episode from '../components/Episode'

const actions = store => ({})

const mapStateToProps = (state) => {
  return {
    episode: 6,
    episodeOf: 10,
    series: 'No Laughing - Enthusiastic Teachers',
    segment: 'Batsu',
    segmentSeason: 2016,
    videoId: 'kleA3PBkxwH3X13TgBn'
  }
}

export default connect(mapStateToProps, actions)(Episode)
