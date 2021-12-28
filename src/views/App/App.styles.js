import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: 360px 1fr;

  background-color: ${({ theme }) => theme.color.darkWhite};
`;
