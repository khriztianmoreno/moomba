/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Left,
  LeftSpot,
  Right,
  RightSpot,
  SplitLayoutContainer,
} from './SplitLayout.styles';
import { PageContainer } from '../Theme/styles';

const SplitLayoutLeft = ({ children = null }) => {
  if (children) {
    return <Left>{children}</Left>
  }

  return null
}

const SplitLayoutRight = ({ children = null }) => {
  if (children) {
    return <Right>{children}</Right>
  }

  return null
}

const SpotImage = ({ src }) => <img src={src} alt="" />

const SplitLayout = ({
  children,
  bgColor = 'transparent',
  alignItems = 'flex-start',
  justify = 'space-between',
  leftSpot = '',
  rightSpot = '',
  height = 'auto',
  element = 'section',
}) => {
  const Element = Container.withComponent(element);

  return (
    <Element
      className="layout"
      height={height}
      bgColor={bgColor}
    >
      {
        leftSpot
          ? <LeftSpot ><SpotImage src={leftSpot}/></LeftSpot>
          : null
      }
      <PageContainer>
        <SplitLayoutContainer alignItems={alignItems} justify={justify}>
          {children}
        </SplitLayoutContainer>
      </PageContainer>
      {
        rightSpot
          ? <RightSpot ><SpotImage src={rightSpot}/></RightSpot>
          : null
      }
    </Element>
  );
};

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
