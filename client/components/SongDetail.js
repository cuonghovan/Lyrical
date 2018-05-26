import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import fetchSongQuery from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { song } = this.props.data; 
    if (!song) {
      return <div>Loading...</div>
    }
    
    return(
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} {...this.props}/>
      </div>
    );
  }
}

export default graphql(fetchSongQuery, {
  options: (props) => ({variables: {id: props.match.params.id}})
})(SongDetail);
