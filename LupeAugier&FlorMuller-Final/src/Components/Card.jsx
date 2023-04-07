import React, { useState } from "react";

import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const listFav = JSON.parse(localStorage.getItem('listFav')) || [];

  const [isFavorite, setIsFavorite] = useState(!!listFav.find(fav => fav.id === id))
  const addFav = () => {
    setIsFavorite(true)
    listFav.push({ name, username, id })
    localStorage.setItem('listFav', JSON.stringify(listFav))
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="./../../public/images/doctor.jpg" alt="dentist"/>
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        </Link>
  
        <button onClick={addFav(id)} disabled={isFavorite} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
