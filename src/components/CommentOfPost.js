import React from 'react';
import './CommentOfPost.css';

function CommentOfPost(props)  {
    return (
      <div className='comment'>
        <em>Name: {props.name}</em>
        <p>Email: {props.email}</p>
        <p>Text: {props.body}</p>
      </div>
    );
}

export default CommentOfPost;
