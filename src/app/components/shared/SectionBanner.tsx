import { FC } from "react";
import styled from "styled-components";
import bg from "../../img/bg_banner.jpeg";
import { device } from "./breakpoints";
import { SiteButton } from "./common";
import { useTranslation } from "react-i18next";
import { FireButton } from "./FireButton";

interface BackgroundProps {
  bgSize?: string;
  bgPosition?: string;
}

interface SectionBannerProps extends BackgroundProps {
  title: string;
  content: string;
  buttonLink?: string;
  translationKey?: string;
}

const Wrapper = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin: 24px 0;
  overflow: hidden;
  position: relative;
  border-radius: 25px;
  margin-bottom: 40px;
  
  ${device.xs} {
    padding: 32px;
  }

  * {
    z-index: 1;
  }

  &:before,
  &:after {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &:before {
    content: '';
    background: url(${bg});
    background-size: ${({ bgSize }) => bgSize || '200%'};
    background-position: ${({ bgPosition }) => bgPosition || '60% 0' };
  }

  &:after {
    content: "";
    z-index: 0;
    background: linear-gradient(90deg, #000000b5, #0000004f);
  }
`;

const Title = styled.h3`
  font-size: 32px;
  text-transform: capitalize;
`;

const Content = styled.div`
  font-size: 16px;
  white-space: pre-line;
  margin-bottom: 32px;

  ${device.xs} {
    font-size: 20px;
  }
`;

const Container = styled.div`
  ${device.md} {
    flex-direction: column;
  }
`;

export const SectionBanner: FC<SectionBannerProps> = ({ 
  title, 
  content,
  buttonLink,
  translationKey,
  ...bgProps
 }) => {
  return (
    <Wrapper {...bgProps}>
      <Title>{title}</Title>

      <Container>
        <Content>{content}</Content>

        {translationKey && (
          <FireButton
            href={buttonLink}
            translationKey={translationKey}
          />
        )}
      </Container>
    </Wrapper>
  );
};
