import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmitLyric(event) {
    event.preventDefault();

    // Mutate song
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content
      }
    })
    .then(() => this.props.data.refetch())
    .then(() => this.setState({content: ''}));
  }

  render() {
    return(
      <form onSubmit={this.onSubmitLyric.bind(this)}>
        <label>Add lyric</label>
        <input 
          type='text'
          onChange={event => this.setState({lyric: event.target.value})}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id,
      title,
      lyrics {
        content
      }
    }
  }
`

export default graphql(mutation)(LyricCreate);
