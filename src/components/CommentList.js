import React from 'react';
import CommentOfPost from './CommentOfPost';
import {comments} from '../comments';
import './CommentList.css';

function CommentList(props) {
    const commentsOfPost = comments.filter(item => item['postId'] === props.postId);
    const commentsOfPostForOutput = commentsOfPost.map(item =>
      <CommentOfPost
        name={item['name']}
        email={item['email']}
        body={item['body']}
        key={item['id']}
      />);

    return (
      <div className="comments">
        <b>Comments:</b>
        {commentsOfPostForOutput}
      </div>
    );
}

export default CommentList;
