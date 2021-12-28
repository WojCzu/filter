import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
  cursor: pointer;
  display: block;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  width: 100%;
  box-shadow: inset 5px 5px 15px rgba(104, 120, 144, 0.25),
    inset -5px -5px 15px rgba(255, 255, 255, 0.65);
  border-radius: 20px;
  border: none;
  padding: 0.5em 0.7em;
  background-color: ${({ theme }) => theme.color.lightGray};
`;
