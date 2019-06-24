import React from 'react';
import {users} from '../users';

function User(props) {
    const authorId = props.authorId;
    const author = users.find(item => item['id'] === authorId);
    return (
      <div className="userBlock">
        <em>{author['name']}</em>
        <p>Email: {author['email']}</p>
      </div>
    );
}

export default User;
