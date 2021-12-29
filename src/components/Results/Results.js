import Card from 'components/Card/Card';
import React from 'react';
import { Wrapper } from './Results.styles';

const Results = ({ data }) => {
  return (
    <Wrapper>
      {data?.map(({ href, image, name }) => (
        <Card key={name} href={href} image={image} text={name} />
      ))}
    </Wrapper>
  );
};

export default Results;
