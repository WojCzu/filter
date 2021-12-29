import FilterForm from 'components/FilterForm/FilterForm';
import Results from 'components/Results/Results';
import React from 'react';
import { mowers } from 'utils/data';
import { Wrapper } from './App.styles';

const App = () => {
  return (
    <Wrapper>
      <FilterForm />
      <Results data={mowers} />
    </Wrapper>
  );
};

export default App;
