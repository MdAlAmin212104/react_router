import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {
      const {id, title, body} = post;

      const postStyle ={
            border : '1px solid black',
            padding : '10px',
            borderRadius : '10px',
      }

      const navigate = useNavigate()

      const handleShowDetails = () => {
            navigate(`/post/${id}`)
      }


      return (
            <div style={postStyle}>
                  <p>Post of Id {id}</p>
                  <h2>{title}</h2>
                  <Link to ={`/post/${id}`}>Show Details</Link>
                  <Link to ={`/post/${id}`}><button>Show Details</button></Link>
                  <button onClick={handleShowDetails}>Click to see Details</button>
            </div>
      );
};

export default SinglePost;