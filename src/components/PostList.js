import React from 'react';
import Post from './Post';
import {posts} from '../posts';

function PostList() {
    const mainList = [];
    for(let item of posts) {
      mainList.push(<Post postDetails={item}
                          key={item['title']}/>);
    }
    return (
      mainList
    );
}

export default PostList;
