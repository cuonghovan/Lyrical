import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }

  render() {
    return(
      <div>
        <h3>Create new form</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song title</label>
          <input 
            onChange={event => this.setState({title: event.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
