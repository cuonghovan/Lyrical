import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends React.Component {

  constructor(props) {
    super(props);
  }

  onLikeLyric(id) {
    this.props.mutate({
      variables: {
        id
      }
    });
  }

  render() {
    return(
      <ul className='collection'>
        {
          this.props.lyrics.map(lyric => (
            <li key={lyric.id} className='collection-item'>
              {lyric.content}
              <div className='vote-box'>
                <i className='material-icons' onClick={() => this.onLikeLyric(lyric.id)}>thumb_up</i>
                {lyric.likes}
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id,
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
