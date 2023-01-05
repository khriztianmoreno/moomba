import styled from "@emotion/styled";
import media from "../../common/Theme/media";

export const ContainerHero = styled.div``;

export const MenuContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 8rem;
  }
`;

type BgHeroProps = {
  bgImage: string;
}

export const BgHero = styled.div<BgHeroProps>(
  props => `
    margin-bottom: 15rem;
    position: relative;

    @media (min-width: 768px) {
      height: 100vh;
    }

    &::before {
      content: "";
      background-image: url(${props.bgImage});
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      @media (min-width: 768px) {
        background-size: contain;
      }
    }
  `
);

export const HideButtonMobile = styled.div(`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  ${media.md`
    display: block;
  `}
`);

export const HideButtonDesktop = styled.div`
  display: block;

  ${media.md`
    display: none;
  `}
`;

export const ButtonSignUp = styled.button(props => (`
  background: ${props.theme.colors.electricViolet};
  border-radius: 5px;
  color: ${props.theme.colors.white};
  height: 3rem;
  width: 9rem;

  ${media.md`
    height: 6rem;
    width: 19rem;
  `}
`));

export const Content = styled.div`
  display: block;


  ${media.md`
    display: flex;
    justify-content: space-between;
  `}
`;

export const Info = styled.div(
  props => `
    color: ${props.theme.colors.white};
    font-family: Poppins;
    padding-top: 8rem;
    margin-bottom: 5rem;

    h3 {
      font-size: 2rem;
      line-height: 3.4rem;
      letter-spacing: 0.4rem;
      padding-bottom: 1rem;
      text-align: left;
      text-transform: uppercase;
    }

    h1 {
      font: normal normal bold 6.4rem Poppins;
      letter-spacing: -1.6px;
      line-height: 6.5rem;
      padding-bottom: 1rem;

      @media (min-width: 768px) {
        line-height: 9rem;
      }
    }

    p {
      font-size: 1.8rem;
      line-height: 3.6rem;
      letter-spacing: 0.4rem;
      padding-right: 2rem;
    }
  `
);

export const ImageContainer = styled.div`
  // margin-top: -5rem;

  @media (min-width: 768px) {
    img {
      width: 1090px;
    }
  }
`;
