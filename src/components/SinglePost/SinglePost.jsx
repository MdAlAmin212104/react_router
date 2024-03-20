import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({post}) => {
      const {id, title, body} = post;

      const postStyle ={
            border : '1px solid black',
            padding : '10px',
            borderRadius : '10px',
      }
      return (
            <div style={postStyle}>
                  <p>Post of Id {id}</p>
                  <h2>{title}</h2>
                  <Link to ={`/post/${id}`}>Show Details</Link>
            </div>
      );
};

export default SinglePost;