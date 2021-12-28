import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.7em 1em;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkWhite};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.color.green} 0%, ${theme.color.darkGreen} 100%)`};
  box-shadow: ${({ theme }) => `10px 25px 25px -10px ${theme.color.darkGreen}40,
    inset -5px -5px 5px ${theme.color.black}26,
    inset 5px 5px 5px ${theme.color.white}1a`};
`;
