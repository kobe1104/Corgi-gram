import React from 'react';
import { Link, withRouter } from 'react-router';

const Comments = () => (
  this.props.comments.map((comment, i) =>
    <ul>
      <li key={i}>{comment.body}</li>
    </ul>
  );
)

export default withRouter(Comments);
