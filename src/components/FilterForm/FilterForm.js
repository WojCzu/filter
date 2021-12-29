import Combobox from 'components/Combobox/Combobox';
import Checkbox from 'components/Checkbox/Checkbox';
import { StyledButton } from 'components/StyledButton/StyledButton';
import React, { useState } from 'react';
import { Wrapper } from './FilterForm.styles';
import { brands, widths } from 'utils/data';
import FormField from 'components/FormField/FormField';
import { useData } from 'hooks/useData';

const FilterForm = () => {
  const initialState = {
    drive: false,
    basket: false,
    discharge: false,
    area: '',
    brand: '',
    width: '',
  };

  const [options, setOptions] = useState(initialState);
  const { filterData, resetData } = useData();

  const handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      setOptions((prevData) => ({
        ...prevData,
        [e.target.name]: !prevData[e.target.name],
      }));
    } else {
      setOptions((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleComboboxChange = (name, inputValue) => {
    setOptions((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const optionsArgs = {};
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        optionsArgs[key] = value;
      }
    }
    filterData(optionsArgs);
  };

  const handleReset = () => {
    setOptions(initialState);
    resetData();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      {/* <FormField
        labelText={'Area:'}
        type={'number'}
        id={'area'}
        value={options.area}
        onChange={handleInputChange}
      /> */}
      <Combobox
        labelText={'Choose a brand:'}
        items={brands}
        selectedItem={options.brand}
        handleComboboxChange={handleComboboxChange}
        name={'brand'}
      />
      <Combobox
        labelText={'Choose a width:'}
        items={widths}
        selectedItem={options.width}
        handleComboboxChange={handleComboboxChange}
        name={'width'}
      />
      <Checkbox
        id={'drive'}
        value={options.drive}
        onChange={handleInputChange}
        labelText={'Drive:'}
      />
      <Checkbox
        id={'basket'}
        value={options.basket}
        onChange={handleInputChange}
        labelText={'Basket:'}
      />
      <Checkbox
        id={'discharge'}
        value={options.discharge}
        onChange={handleInputChange}
        labelText={'Side discharge:'}
      />

      <StyledButton>Search</StyledButton>
      <StyledButton type="button" onClick={handleReset}>
        Reset
      </StyledButton>
    </Wrapper>
  );
};

export default FilterForm;
