import styled from '@emotion/styled';

export const AboutContainer = styled.section(
  props => `
    position: relative;
    height: 94rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${props.bgImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -1;
    }
  `
);

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2(
  props => `
    color: ${props.theme.colors.white};
    font-family: 'Poppins';
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 5rem;
    margin-bottom: 3rem;
    padding-top: 30rem;
    text-align: center;
  `
);

export const Description = styled.p(
  props => `
    color: ${props.theme.colors.white};
    font-family: 'Poppins';
    font-size: 1.8rem;
    line-height: 3.6rem;
    margin-bottom: 7rem;
    text-align: center;
  `
);

export const Button = styled.button(
  props => `
    background-color: ${props.theme.colors.springGreen};
    border-radius: 0.9rem;
    color: ${props.theme.colors.persianIndigo};
    font-family: 'Poppins';
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 3.6rem;
    padding: 1.7rem 4.4rem;
    margin-bottom: 7rem;
    text-align: center;
  `
);
