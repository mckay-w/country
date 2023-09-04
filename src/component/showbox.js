import React from 'react';
import { Link } from 'react-router-dom';

const Showbox = ({ imageUrl, articleId, altText,text }) => {
  return (
    <div >
        <Link to={`/articles/${articleId}`}>
            <img src={imageUrl} alt={altText} style={{width: "80%", height:"80%",borderRadius: "10%", border: "2px solid rgb(231, 253, 236)" }}/>
        </Link>
        <h3>
            {text}
        </h3>
    </div>
  );
};

export default Showbox;