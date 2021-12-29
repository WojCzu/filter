import Card from 'components/Card/Card';
import { useData } from 'hooks/useData';
import React from 'react';
import { Wrapper } from './Results.styles';

const Results = () => {
  const { data } = useData();
  return (
    <Wrapper>
      {data?.map(({ href, imageURL, name }) => (
        <Card key={name} href={href} image={imageURL} text={name} />
      ))}
    </Wrapper>
  );
};

export default Results;
