import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png';

import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper } from "./styles";
import { Card, RestaurantCard, Map, Modal } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar restaurante'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na Sua Area</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
            <Card photo={restaurante} title="Nome Restaurant" />
          </Carousel>
          <button onClick={() => setModalOpened(true)}>Abrir modal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
}

export default Home;