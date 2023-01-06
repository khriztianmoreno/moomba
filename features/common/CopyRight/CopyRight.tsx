import styled from '@emotion/styled';

const Container = styled.div`
  align-items: center;
  background-color: #f7f5f6;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const Paragraph = styled.p(
  props => `
    color: #9F9F9F;
    font-size: 1.8rem;
    line-height: 3.6rem;
    opacity: 0.78;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  `
);

const CopyRight = () => {
  const year = new Date().getFullYear();

  return (
    <Container className="layout">
      <Paragraph>
        Copyright © {year} Moomba - All Rights Reserved
      </Paragraph>
    </Container>
  );
};

export default CopyRight;
