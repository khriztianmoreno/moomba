import styled from '@emotion/styled';

export const Container = styled.section(
  props => `
    position: relative;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      min-height: ${props.height};
    }
  `
);

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
  position: relative;
  max-width: 50rem;
`;

export const LeftSpot = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
  }
`

export const RightSpot = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
  }
`
