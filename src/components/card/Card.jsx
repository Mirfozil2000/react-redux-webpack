import React from 'react'
import {useParams} from 'react-router-dom';

const Card = (props) => {
    const {username, reponame} = useParams();
    console.log(username);
  return (
    <div>
      <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
      card repo
    </div>
  )
}

export default Card
