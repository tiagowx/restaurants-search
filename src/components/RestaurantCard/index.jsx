import React from "react";
import ReactStars from 'react-rating-stars-component';

import { Addres, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars
        activeColor="#e7711c"
        count={4}
        edit={false}
        isHalf
        value={4}
      />
      <Addres>Rua da França, 23</Addres>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} />
  </Restaurant>
);


export default RestaurantCard;