import { Col, Container, Row } from "react-bootstrap";
import HeroImage from "../../img/hero_image_euphoria_sadhu.png";
import styled from "styled-components";
import { SiteButton } from "../shared/components";
import BgHome from "../../img/bg_home.svg";

const Stage = styled(Row)`
  position: relative;
  flex-flow: column-reverse;
  justify-content: flex-end;
  height: calc(100vh - 90px);
  overflow: hidden;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductTitle = styled.div`
  font-size: 38px;
  font-weight: 700;
`;

const ProductSubTitle = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 24px;
`;

const TextCol = styled(Col)`
  position: absolute;
  padding-bottom: 12px;
  padding-top: 50px;
  bottom: -1px;
  background: linear-gradient(0deg, #01152d, #01152d94, transparent);
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

export const HomeSection = () => (
  <Container>
    <Stage>
      <TextCol xs="12">
        <Row>
          <Col xs="12">
            <ProductTitle>Sadhu Boards by Euphoria System</ProductTitle>
          </Col>

          <Col xs="12">
            <ProductSubTitle>
              Is Your Key to the New Dimension of Mindfulness
            </ProductSubTitle>
          </Col>

          <Col xs="6">
            <SiteButton>Buy Now</SiteButton>
          </Col>

          <Col xs="6">
            <SiteButton variant="outline-primary">Learn More</SiteButton>
          </Col>
        </Row>
      </TextCol>

      <Col xs="12">
        <ProductImage
          src={HeroImage}
          alt="Sadhu Nail Boards by Euphoria System"
        />
      </Col>
    </Stage>

    <ProductBackground />
  </Container>
);
