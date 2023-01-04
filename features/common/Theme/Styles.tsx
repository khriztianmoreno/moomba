import styled from '@emotion/styled'

import media from '../Theme/media'

export const PageContainer = styled.div(
  props => `
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
    background-color: ${props.bgColor || props.theme.colors.white};

    ${media.md`
      padding-left: 22rem;
      padding-right: 22rem;
    `}
  `,
);
