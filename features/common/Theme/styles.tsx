import styled from '@emotion/styled'

type PageContainerProps = {
  bgColor?: string
}

export const PageContainer = styled.div<PageContainerProps>(
  props => `
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
    background-color: ${props.bgColor || 'transparent'};

    @media (min-width: 768px) {
      padding-left: 22rem;
      padding-right: 22rem;
    }
  `,
);
