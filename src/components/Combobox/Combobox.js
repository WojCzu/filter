import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import {
  InputWrapper,
  StyledItem,
  StyledLabel,
  StyledList,
  Wrapper,
} from './Combobox.styles';

const Combobox = ({
  labelText,
  items,
  selectedItem,
  handleComboboxChange,
  name,
  required,
}) => {
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
      handleComboboxChange(name, inputValue);
    },
  });
  return (
    <Wrapper>
      <StyledLabel {...getLabelProps()}>{labelText}</StyledLabel>
      <InputWrapper {...getComboboxProps()}>
        <input {...getInputProps()} required={required} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label={'toggle menu'}
        >
          &#8595;
        </button>
      </InputWrapper>
      <StyledList {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <StyledItem
              isHighlighted={highlightedIndex === index}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </StyledItem>
          ))}
      </StyledList>
    </Wrapper>
  );
};

export default Combobox;
