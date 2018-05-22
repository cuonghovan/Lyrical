import React from 'react';

class SongCreate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  render() {
    return(
      <div>
        <h3>Create new form</h3>
        <form>
          <label>Song title</label>
          <input 
            onChange={value => this.setState({title: value})}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
