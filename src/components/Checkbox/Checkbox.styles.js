import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.gray};
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover span {
    background-color: #ddd;
  }
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  & ~ span {
    position: relative;
    height: 44px;
    width: 44px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.lightGray};
    box-shadow: ${({ value }) =>
      value
        ? '5px 5px 15px rgba(104, 120, 144, 0.25), -5px -5px 15px rgba(255, 255, 255, 0.65)'
        : 'inset 5px 5px 15px rgba(104, 120, 144, 0.25),inset -5px -5px 15px rgba(255, 255, 255, 0.65)'};

    &::after {
      ${({ value, theme }) =>
        value &&
        css`
          content: '';
          position: absolute;
          display: block;
          left: 50%;
          top: 50%;
          width: 22%;
          height: 50%;
          border: solid ${theme.color.darkGreen};
          border-width: 0 4px 4px 0;
          transform: translate(-50%, -50%) rotate(45deg);
        `}
    }
  }
  &:focus-visible ~ span {
    outline: 2px solid black;
    background-color: #ddd;
  }
`;
