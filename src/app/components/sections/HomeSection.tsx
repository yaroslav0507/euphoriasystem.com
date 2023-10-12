import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import HeroImage from "../../img/hero_image_euphoria_sadhu.webp";
import BgHomeVortex from "../../img/bg_home-vortex_x2.webp";
import styled from "styled-components";
import { device, size } from "../shared/breakpoints";
import { FireButton } from "../shared/FireButton";
import { BackgroundSection } from "../shared/common";

const headerHeight = '75px';

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

const ProductImage = styled.div<{ url: string }>`
  max-width: 100%;
  background: url(${({ url }) => url});
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100%;
  margin: auto;

  ${device.xs} and (min-height: ${size.md}) { 
    background-position: center;
    width: 100%;
  }

  ${device.sm} {
    background-size: contain;
    width: 100%;
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
  margin-bottom: 24px;

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
  bottom: -1px;
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

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 420px;
    max-height: 50vh;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
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

export const HomeSection = () => {
  const { t } = useTranslation();

  const CallToAction = (
    <Row>
      <Col xs="12">
        <ProductTitle>
          {t('home.title')}
        </ProductTitle>
      </Col>

      <Col xs="12">
        <ProductSubTitle>
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
              url={HeroImage}
              className="animate__animated animate__zoomIn animate__delay-1s"
            />
          </ProductCol>
        </Stage>
  
        <BackgroundSection
          bg={BgHomeVortex}
          headerHeight={headerHeight}
        />
      </Container>
    </HomeWrapper>
  )
};
