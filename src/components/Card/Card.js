import React from 'react';
import { Wrapper, ImageContainer } from './Card.styles';

const Card = ({ href, image, text }) => {
  return (
    <Wrapper href={href} rel="noopener noreferrer" target="_blank">
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Card;
