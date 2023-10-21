import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import HeroImage from "../../img/hero_image_euphoria_sadhu.webp";
import BgHomeVortex from "../../img/bg_home-vortex_x2.webp";
import styled from "styled-components";
import { device, size } from "../shared/breakpoints";
import { FireButton } from "../shared/FireButton";
import { BackgroundSection } from "../shared/common";
import { headerHeight } from "../Header/Header";
import { useState } from "react";

const Stage = styled(Row)`
  position: relative;
  flex-flow: column-reverse;
  justify-content: flex-end;
  min-height: 270px;
  height: calc(100svh - ${headerHeight});
  overflow: hidden;

  ${device.sm} { 
    flex-flow: row;
    align-items: center;
  }
`;

const ProductImage = styled.div<{ $url: string }>`
  max-width: 100%;
  background: url(${({ $url }) => $url});
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  margin: auto;
  animation-delay: .5s;
  z-index: 1;

  ${device.sm} {
    background-position: center;
    background-size: contain;
  }
`;

const ProductTitle = styled.div`
  font-size: 26px;
  font-weight: 700;
  white-space: pre-line;
  min-width: 320px;

  ${device.xs} {
    font-size: 32px;
  }

  ${device.xs} and (min-height: ${size.sm}),
  ${device.sm} {
    font-size: 38px;
  }

  ${device.lg} {
    font-size: 57px;
  }

  ${device.xl} {
    font-size: 63px;
  }
`;

const ProductSubTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;

  ${device.xs} {
    font-size: 24px;
  }

  ${device.lg} {
    font-size: 30px;
  }
`;

const TextCol = styled(Col)`
  position: absolute;
  padding-bottom: 4%;
  bottom: 0;
  z-index: 2;

  ${device.xs} and (min-height: ${size.sm}) {
    padding-top: 50px;
  }

  ${device.sm} { 
    position: initial;
  }

  ${device.xl} { 
    padding-top: 0;
  }
`;

const HomeWrapper = styled.div`
  position: relative;


  ${device.sm} {
    overflow: visible;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 420px;
    max-height: 50vh;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(0deg, #01152d, #01152dc7, transparent);

    ${device.sm} {
      transform: translateY(40%);
    }

    ${device.md} {
      transform: translateY(60%);
    }
  }
`;

const ProductCol = styled(Col)`
  flex-grow: 1;
  height: 100%;
`;

const HomeBackgroundSection = styled(BackgroundSection) <{ $active?: boolean }>`
  height: calc(110% + 90px);
  width: 110%;
  top: -24%;
  left: -5%;
  z-index: ${({ $active }) => $active ? -1 : -2};
  opacity: ${({ $active }) => $active ? 1 : 0};
  transition: opacity .3s ease;

  ${device.sm} {
    height: calc(110% + ${headerHeight});
  }

  ${device.md} {
    top: -140px;
  }
`;

const bgVariants = [
  BgHomeVortex,
  'https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg',
  'https://cdn.wallpapersafari.com/92/54/ZthTvc.jpg',
  'https://i.pinimg.com/originals/3d/12/7c/3d127c64bd8501958892473f04c95ae5.jpg',
  'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/42930599_2144561368938417_8259090727158415360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9a8829&_nc_ohc=lfZACLVQwK4AX_VsQor&_nc_ht=scontent-iev1-1.xx&oh=00_AfBVa5-b0EpNo04558y_7GCnpENGUy-DI1lvG1u7iMjtlw&oe=65589D4C',
  'https://getmanat.org/wp-content/uploads/2014/11/777%D0%B2.jpg',
  'https://moreinfo.ua/uploads/thumb/0/place_history/1193-%D0%BA%D0%B0%D0%BD%D1%96%D0%B2%20%D0%BB%D1%96%D1%82%D0%BE.jpg',
  'https://procherk.info/images/news/052022/0cb6a996549d36a7c3562377aaecf401.jpg',
];

export const HomeSection = () => {
  const { t } = useTranslation();
  const [bgVariant, setBgVariant] = useState(0);

  const toggleBg = () => {
    const nextVariant = bgVariant === bgVariants.length - 1 ? 0 : bgVariant + 1;
    setBgVariant(nextVariant);
  }

  const CallToAction = (
    <Row>
      <Col xs="12">
        <ProductTitle>
          {t('home.title')}
        </ProductTitle>
      </Col>

      <Col xs="12">
        <ProductSubTitle className="mb-4 mb-lg-5" onClick={toggleBg}>
          {t('home.subtitle')}
        </ProductSubTitle>
      </Col>

      <Col
        xs="12"
        md="10"
        lg="8"
      >
        <Row>
          <Col xs="6">
            <FireButton href="#contacts" translationKey="button.order" />
          </Col>

          <Col xs="6">
            <FireButton href="#about" variant="outline-primary" translationKey="button.more" />
          </Col>
        </Row>
      </Col>

    </Row>
  );

  return (
    <HomeWrapper>
      <Container>
        <Stage>
          <TextCol
            xs="12"
            sm="7"
            xxl="7"
            className="animate__animated animate__fadeInUp"
          >
            {CallToAction}
          </TextCol>

          <ProductCol
            xs="12"
            sm="5"
            xxl="5"
          >
            <ProductImage
              $url={HeroImage}
              className="animate__animated animate__zoomIn reveal"
            />
          </ProductCol>
        </Stage>

        {bgVariants.map((v: string, idx) => (
          <HomeBackgroundSection
            $bg={v}
            $active={idx === bgVariant}
            $headerHeight={headerHeight}
          />
        ))}

      </Container>
    </HomeWrapper>
  )
};
