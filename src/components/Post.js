import React from 'react';
import User from './User';
import CommentList from './CommentList';

function Post(props) {
    const post = props.postDetails;

    return (
      <div className="post">
        <h2>{post['title'].toUpperCase()}</h2>
        <p>{post['body']}</p>
        <User authorId={post['userId']}/>
        <CommentList postId={post['id']}/>
      </div>
    );
}

export default Post;
