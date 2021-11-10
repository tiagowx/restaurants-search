import styled from "styled-components";


export const Restaurant = styled.div`
  display:flex;
  justify-content: space-between;
  cursor:pointer;
  margin-top: 4px;
  padding: 16px;
  background-color: #fff;
  border-left: 4px solid transparent;
  :hover{
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div` 
  display: flex;
  flex-direction: column;

`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;


export const Addres = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin: 8px 0px;
`;


export const RestaurantPhoto = styled.img` 
  width:  100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;