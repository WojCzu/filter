import Combobox from 'components/Combobox/Combobox';
import Checkbox from 'components/Checkbox/Checkbox';
import { StyledButton } from 'components/StyledButton/StyledButton';
import React, { useState } from 'react';
import { Wrapper } from './FilterForm.styles';
import { brands, widths } from 'utils/data';
import FormField from 'components/FormField/FormField';
const FilterForm = () => {
  const [data, setData] = useState({
    drive: false,
    basket: false,
    discharge: false,
    area: '',
    brand: '',
    width: '',
  });

  const handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      setData((prevData) => ({
        ...prevData,
        [e.target.name]: !prevData[e.target.name],
      }));
    } else {
      setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }
  };
  const handleComboboxChange = (name, inputValue) => {
    setData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormField
        labelText={'Area:'}
        type={'number'}
        id={'area'}
        value={data.area}
        onChange={handleInputChange}
        required
      />
      <Combobox
        labelText={'Choose a brand:'}
        items={brands}
        selectedItem={data.brand}
        handleComboboxChange={handleComboboxChange}
        name={'brand'}
        required
      />
      <Combobox
        labelText={'Choose a width:'}
        items={widths}
        selectedItem={data.width}
        handleComboboxChange={handleComboboxChange}
        name={'width'}
        required
      />
      <Checkbox
        id={'drive'}
        value={data.drive}
        onChange={handleInputChange}
        labelText={'Drive:'}
      />
      <Checkbox
        id={'basket'}
        value={data.basket}
        onChange={handleInputChange}
        labelText={'Basket:'}
      />
      <Checkbox
        id={'discharge'}
        value={data.discharge}
        onChange={handleInputChange}
        labelText={'Side discharge:'}
      />

      <StyledButton>Search</StyledButton>
    </Wrapper>
  );
};

export default FilterForm;
