import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  padding: 20px;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: max-content;
  overflow: auto;
`;
