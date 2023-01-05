import styled from '@emotion/styled';

export const Container = styled.section`
  margin-bottom: 3rem;
`;

export const SplitLayoutContainer = styled.div`
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Left = styled.div`
  max-width: 50rem;
`;
