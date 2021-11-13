import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component';

import { Addres, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';
import Skeleton from "../Skeleton";

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          activeColor="#e7711c"
          count={4}
          edit={false}
          isHalf
          value={restaurant.rating}
        />
        <Addres>{restaurant.vicinity || restaurant.formatted_address}</Addres>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto de Restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  )
};


export default RestaurantCard;