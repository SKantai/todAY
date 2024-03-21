import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/pets?id=${id}`)
      .then(response => response.json())
      .then(data => setPet(data.pet))
      .catch(error => console.error('Error fetching pet details:', error));
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pet.name}</h2>
      <img src={pet.image} alt={pet.name} />
      <p>Breed: {pet.breed}</p>
      <p>Shelter: {pet.shelter}</p>
      <p>Price: ${pet.price}</p>
      <p>Contact: {pet.contact}</p>
    </div>
  );
}

export default PetDetails;
