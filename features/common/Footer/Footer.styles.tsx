import styled from '@emotion/styled';

import logoImg from '../../../assets/img/logo.png';

export const Logo = styled.div`
  background-image: url(${logoImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 7.4rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 30rem;
  }
`;

export const Paragraph = styled.div(
  props => `
    color: ${props.theme.colors.doveGray};
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    opacity: 0.78;

    @media (min-width: 768px) {
      text-align: left;
    }
  `
);

export const ContainerIcons = styled.div`
  height: 2rem;
  margin-bottom: 2rem;
`;
