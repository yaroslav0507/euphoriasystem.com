import { FC } from "react";
import styled from "styled-components";
import bg from "../../img/bg_banner.jpeg";

interface BackgroundProps {
  bgSize?: string;
  bgPosition?: string;
}

interface SectionBannerProps extends BackgroundProps {
  title: string;
  content: string;
  render?: JSX.Element;
}

const Wrapper = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: hidden;
  position: relative;
  background: url(${bg});
  border-radius: 25px;
  margin-bottom: 40px;
  background-size: ${({ bgSize }) => bgSize || '200%' };
  background-position: ${({ bgPosition }) => bgPosition || '60% 0' };
  
  * {
    z-index: 1;
  }

  &:after {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background: linear-gradient(90deg, #000000b5, #0000004f);
  }
`;

const Title = styled.h3`
  font-size: 34px;
  text-transform: capitalize;
`;

const Content = styled.div`
  font-size: 20px;
  white-space: pre-line;
`;

export const SectionBanner: FC<SectionBannerProps> = ({ 
  title, 
  content,
  render,
  ...bgProps
 }) => {
  return (
    <Wrapper {...bgProps}>
      <Title>{title}</Title>

      <Content>{content}</Content>
      
      { render }
    </Wrapper>
  );
};
