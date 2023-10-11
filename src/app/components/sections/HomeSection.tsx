import { Col, Container, Row } from "react-bootstrap";
import { SiteButton } from "../shared/common";
import { useTranslation } from "react-i18next";
import HeroImage from "../../img/hero_image_euphoria_sadhu.png";
import BgHome from "../../img/bg_home.svg";
import styled from "styled-components";
import { device, size } from "../shared/breakpoints";

const Stage = styled(Row)`
  position: relative;
  flex-flow: column-reverse;
  justify-content: flex-end;
  height: calc(100svh - 78px);
  overflow: hidden;

  @media ${device.md} { 
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

  @media ${device.md} and (min-height: ${size.lg}) { 
    background-position: center;
  }
`;

const ProductTitle = styled.div`
  font-size: 38px;
  font-weight: 700;
  white-space: pre-line;
`;

const ProductSubTitle = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`;

const TextCol = styled(Col)`
  position: absolute;
  padding-bottom: 3%;
  padding-top: 50px;
  bottom: 0;
  z-index: 2;

  @media ${device.md} { 
    position: initial;
  }
`;

const ProductBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url(${BgHome});
  background-size: cover;
  background-position: 0 20%;
`;

const HomeWrapper = styled.div`
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 320px;
    max-height: 50vh;
    position: absolute;
    left: 0;
    bottom: -2px;
    z-index: 2;
    background: linear-gradient(0deg, #01152d, #01152dc7, transparent);
  }
`;

const ProductCol = styled(Col)`
  flex-grow: 1;
  height: 100%;
`;

export const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <HomeWrapper>
      <Container>
        <Stage>
          <TextCol xs="12" md="6" lg="5">
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
  
              <Col xs="6">
                <SiteButton href="#order">{t('button.order')}</SiteButton>
              </Col>
  
              <Col xs="6">
                <SiteButton href="#about" variant="outline-primary">{t('button.more')}</SiteButton>
              </Col>
            </Row>
          </TextCol>
  
          <ProductCol xs="12" md="6" lg="7">
            <ProductImage url={HeroImage}/>
          </ProductCol>
        </Stage>
  
        <ProductBackground />
      </Container>
    </HomeWrapper>
  )
};
