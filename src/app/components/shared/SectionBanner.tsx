import { FC } from "react";
import styled from "styled-components";
import bg from "../../img/bg_banner.jpeg";

interface SectionBannerProps {
  title: string;
  content: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: hidden;
  position: relative;
  background: url(${bg});
  border-radius: 25px;
  margin-bottom: 40px;
  background-size: 200%;
  background-position: 60% 0;

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
    background: linear-gradient(90deg, #000000bf, transparent);
  }
`;

const Title = styled.h3`
  font-size: 42px;
`;

const Content = styled.div`
  font-size: 20px;
`;

export const SectionBanner: FC<SectionBannerProps> = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Content>{content}</Content>
    </Wrapper>
  );
};
