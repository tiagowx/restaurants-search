import React, { useState } from "react";
import { useSelector } from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png';

import { Carousel, CarouselTitle, Container, Logo, ModalTitle, ModalContent, Search, Wrapper } from "./styles";
import { Card, RestaurantCard, Map, Modal } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceid] = useState(null);
  const [query, setQuety] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'enter') {
      setQuety(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceid(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar restaurante'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na Sua Area</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photo ?
                  restaurant.photo[0].getUrl() :
                  restaurante}
                title={restaurant.name}
              />
            ))}
          </Carousel>
          <button onClick={() => setModalOpened(true)}>Abrir modal</button>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant} />
        ))}

      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora!' : 'Fechado'}</ModalContent>
      </Modal>
    </Wrapper>
  );
}

export default Home;