import React from 'react';

class LyricList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className='collection'>
        {
          this.props.lyrics.map(lyric => (
            <li key={lyric.id} className='collection-item'>{lyric.content}</li>
          ))
        }
      </ul>
    );
  }
}

export default LyricList;
