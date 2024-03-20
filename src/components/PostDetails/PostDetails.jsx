import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
      const post = useLoaderData()
      console.log(post);
      const {title, body} = post;
      return (
            <div>
                  <h2>Title :{title}</h2>
                  <p>Body : {body}</p>
                  
            </div>
      );
};

export default PostDetails;