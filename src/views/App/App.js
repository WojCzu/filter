import FilterForm from 'components/FilterForm/FilterForm';
import Results from 'components/Results/Results';
import React from 'react';
import { Wrapper } from './App.styles';

const App = () => {
  return (
    <Wrapper>
      <FilterForm />
      <Results />
    </Wrapper>
  );
};

export default App;
