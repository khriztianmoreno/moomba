import styled from '@emotion/styled'

type PageContainerProps = {
  bgColor?: string
}

export const PageContainer = styled.div<PageContainerProps>(
  props => `
    background-color: ${props.bgColor || 'transparent'};
    // padding-left: 2rem;
    // padding-right: 2rem;
    position: relative;
    width: 100%;

    @media (min-width: 1280px) {
      // padding-left: 5rem;
      // padding-right: 5rem;
      max-width: 1416px;
    }
  `,
);
