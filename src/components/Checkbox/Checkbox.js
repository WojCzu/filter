import React from 'react';
import { StyledCheckbox, StyledLabel } from './Checkbox.styles';

const CheckBox = ({ id, labelText, ...props }) => {
  return (
    <StyledLabel htmlFor={id}>
      {labelText}
      <StyledCheckbox type="checkbox" name={id} id={id} {...props} />
      <span></span>
    </StyledLabel>
  );
};

export default CheckBox;
