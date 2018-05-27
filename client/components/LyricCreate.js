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
    .then(() => this.setState({content: ''}));
  }

  render() {
    return(
      <form onSubmit={this.onSubmitLyric.bind(this)}>
        <label>Add lyric</label>
        <input 
          type='text'
          onChange={event => this.setState({content: event.target.value})}
          value={this.state.content}
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
        id,
        content,
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricCreate);
