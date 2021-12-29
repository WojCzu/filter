import styled from 'styled-components';

export const Wrapper = styled.a`
  background: ${({ theme }) => theme.color.darkWhite};
  box-shadow: -5px -5px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.28);
  border: none;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  p {
    margin: 0;
    padding: 1em;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.color.gray};
  }

  :hover {
    background: ${({ theme }) => theme.color.white};
    p {
      color: ${({ theme }) => theme.color.darkGreen};
    }
  }
`;

export const ImageContainer = styled.div`
  height: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
