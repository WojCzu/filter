import React from 'react';
import { StyledLabel, StyledInput } from './FormField.styles';

const FormField = ({ labelText, type, id, ...props }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{labelText}</StyledLabel>
      <StyledInput type={type} name={id} id={id} {...props} />
    </div>
  );
};

export default FormField;
