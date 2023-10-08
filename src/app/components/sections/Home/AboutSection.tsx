import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../../shared/SectionHeader";
import AboutImage from "../../../img/about_section_image.jpg";
import styled from "styled-components";

const ProductImage = styled.div`
  width: calc(100% + 24px);
  margin-left: -12px;
  height: 100%;
  min-height: 570px;
  background: url(${AboutImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    bottom: 0;
    width: 100%;
    height: 15%;
    position: absolute;

    background: linear-gradient(
      to bottom left,
      transparent 0%,
      transparent 50%,
      #01152d 50%,
      #01152d 100%
    );
  }
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

export const AboutSection = () => (
  <>
    <Container>
      <Row>
        <Col xs="12">
          <SectionHeader subtitle="About" title="What is a Sadhu Board" />
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <Col xs="12">
          <ProductImage />
        </Col>

        <Col xs="12">
          <AboutTextWrapper>
            <h3>
              Sadhu nail boards are acupressure devices for meditation and
              recovery
            </h3>

            <p>
              Nail boards are yogic tools that originated in India over 2,000
              years ago, also known as 'bed of nails' or 'sadhu boards'. Our
              feet and palms have thousands of energy points and nerve endings
              linked to all internal organs and systems of the body.
              <br />
              <br />
              Standing on nail boards regulates the nervous system and trains
              the mind to respond to any stressors with resilient calm and
              focus, like an ice bath without the cold!
              <br />
              <br />
              Besides promoting stress resilience, nail boards also offer great
              physical benefits, such as relieving muscle tension, improving
              blood and lymph circulation, and releasing endorphins, which are
              natural 'feel-good' hormones for self-healing.
            </p>
          </AboutTextWrapper>
        </Col>
      </Row>
    </Container>
  </>
);
