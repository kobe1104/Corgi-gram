import React from 'react';
import { Link, withRouter } from 'react-router';

class Photo extends React.Component {
  render() {
    return (
      <div className='feed-container'>
        <div className='photo1'>photo1</div>
        <div className='photo2'>photo2</div>
        <div className='photo3'>photo3</div>
        <div className='photo4'>photo4</div>
      </div>
    );
  }
}

export default withRouter(Photo);
