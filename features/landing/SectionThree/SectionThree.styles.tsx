import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    img {
      margin-top: -9rem;
    }
  }
`;
