import React from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';

class SongDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default SongDetail;

// export default graphql(fetchSongQuery, {
//   options: (props) => ({variables: {id: props.params.id}})
// })(SongDetail);
