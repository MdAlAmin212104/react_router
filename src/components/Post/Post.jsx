import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import "./Post.css"

const Post = () => {
      const posts = useLoaderData()
      return (
            <div>
                  <h2>Posts : {posts.length}</h2>
                  <div className='posts'>
                        {
                              posts.map(post => <SinglePost key={post.id} post ={post}/>)
                        }
                  </div>
            </div>
      );
};

export default Post;