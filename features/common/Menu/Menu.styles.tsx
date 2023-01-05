import styled from '@emotion/styled';

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const NavMenuLogo = styled.div``;

export const NavMenuList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const NavMenuListItem = styled.li(props => (`
  margin: 0 2rem;

  a {
    color: ${props.theme.colors.white};
    font: normal normal 400 1.8rem/3.4rem Poppins;
    letter-spacing: -0.45px;
    text-transform: capitalize;
    text-decoration: none;

    &:hover, &.active {
      color: ${props.theme.colors.springGreen};
    }

    &.active {
      border-bottom: 0.2rem solid ${props.theme.colors.springGreen};
    }
  }
`));

export const ButtonSignUp = styled.button(props => (`
  background-color: ${props.theme.colors.electricViolet};
  border-radius: 5px;
  color: ${props.theme.colors.white};
  font-size: 1.6rem;
  font-family: Poppins;
  line-height: 3.4rem;
  padding: 0.4rem 4.3rem;

  &:hover {
    background-color: ${props.theme.colors.springGreen};
    color: ${props.theme.colors.electricViolet};
  }
`));

export const HambugerMenu = styled.div`
  svg {
    fill: ${props => props.theme.colors.springGreen};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HideButtonMobile = styled.div(`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`);

export const HideButtonDesktop = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  width: 16rem;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 20rem;
  }
`;
