import {
  BgHero,
  ButtonSignUp,
  ContainerHero,
  Content,
  HideButtonMobile,
  ImageContainer,
  Info,
  MenuContainer,
} from "./Hero.styles";

import heroBg from '../../../assets/img/hero.png';
import heroContent from '../../../assets/img/hero-content2x.png';
import Menu from "../../common/Menu";
import { PageContainer } from "../../common/Theme/styles";

const Hero = () => {
  return (
    <BgHero bgImage={heroBg.src}>
      <div className="layout">
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <PageContainer>
          <Content>
            <Info>
              <h3>Welcome to MOOMBA</h3>
              <h1>
                New Digital <br />
                Plataform Video
              </h1>
              <p>Lorem ipsum dolor sit amet consecte elit Ut wisi enim ad minim veniam, quis sit</p>
            </Info>

            <ImageContainer>
              <img src={heroContent.src} alt="Moomba content" />
            </ImageContainer>
          </Content>
        </PageContainer>
      </div>
    </BgHero>
  );
};

export default Hero;
