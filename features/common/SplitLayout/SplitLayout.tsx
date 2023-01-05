import {
  Container,
  Left,
  SplitLayoutContainer,
} from './SplitLayout.styles';
import { PageContainer } from '../Theme/styles';

const SplitLayoutLeft = ({ children }) => (
  <Left>{children}</Left>
)

export const SplitLayoutRight = ({ children }) => (
  <div className="split-layout__right">{children}</div>
)

const SplitLayout = ({ children }) => {
  return (
    <Container className="layout">
      <PageContainer>
        <SplitLayoutContainer>
          {children}
        </SplitLayoutContainer>
      </PageContainer>
    </Container>
  );
};

SplitLayout.Left = SplitLayoutLeft;
SplitLayout.Right = SplitLayoutRight;

export default SplitLayout;
