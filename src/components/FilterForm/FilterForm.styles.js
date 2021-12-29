import styled from 'styled-components';

export const Wrapper = styled.form`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;

  &::before,
  &::after {
    content: '';
    flex: 1;
  }
`;
