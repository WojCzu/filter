import styled from 'styled-components';

export const StyledList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.white};
  left: 0;
  right: 0;
  list-style: none;
  z-index: 1;

  max-height: 25vh;
  overflow: auto;
`;

export const StyledItem = styled.li`
  margin-block: 0.5em;
  padding: 0.2em;
  cursor: pointer;
  background-color: ${({ isHighlighted, theme }) =>
    isHighlighted && theme.color.green};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
  cursor: pointer;
  display: block;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 44px;
  gap: 0.5rem;
  align-items: center;

  input {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    box-shadow: 5px 5px 15px rgba(104, 120, 144, 0.25),
      -5px -5px 15px rgba(255, 255, 255, 0.65);
    border-radius: 20px;
    border: none;
    padding: 0.5em 0.7em;
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  button {
    height: 44px;
    width: 44px;
    border-radius: 12px;
    border: none;
    font-size: 30px;
    box-shadow: 5px 5px 15px rgb(104 120 144 / 25%),
      -5px -5px 15px rgb(255 255 255 / 65%);
    background-color: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.darkGreen};
    cursor: pointer;
  }
`;
