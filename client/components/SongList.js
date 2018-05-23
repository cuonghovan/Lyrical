import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import fetchSongsQuery from '../queries/fetchSongs';


class SongList extends React.Component {
  
  onSongDelete(id) {
    this.props.mutate({
      variables: {id}      
    })
    .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(song => (
      <li className='collection-item' key={song.id}>
        {song.title}
        <i className='material-icons' onClick={() => this.onSongDelete(song.id)}>delete</i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className='collection'>
          {this.renderSongs()}
        </ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(fetchSongsQuery)(SongList)
);
