import styled from '@emotion/styled';

export const Container = styled.section`
  margin-bottom: 3rem;
`;

export const SplitLayoutContainer = styled.div(
  props => `
    gap: 2rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: ${props.alignItems || 'baseline'};
      gap: 17rem;
    }
  `
);

export const Left = styled.div`
  max-width: 50rem;
`;
