import React from "react";
import ReactStars from 'react-rating-stars-component';

import { Addres, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => (
  
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
    <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].gitUrl() : restaurante} />
  </Restaurant>
);


export default RestaurantCard;