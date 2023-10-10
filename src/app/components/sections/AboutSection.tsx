import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import AboutImage from "../../img/about_section_image.jpg";
import { SectionBanner } from "../shared/SectionBanner";
import styled from "styled-components";
import { ImageSection } from "../shared/common";
import { useTranslation } from "react-i18next";

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
`;

export const AboutSection = () => {
  const {t} = useTranslation();

  return (
    <>
      <Container id="about">
        <Row>
          <Col xs="12">
            <SectionHeader 
              name={t('about.name')} 
              title={t('about.title')}
            />
          </Col>
        </Row>
      </Container>
  
      <Container fluid>
        <Row className="mb-5">
          <Col xs="12">
            <ImageSection
              bgColor="#01162d"
              url={ AboutImage }
            />
          </Col>
  
          <Col xs="12">
            <AboutTextWrapper>
              <h3>
                {t('about.description.title')}
              </h3>
  
              <p>
                {t('about.description.text')}
              </p>
            </AboutTextWrapper>
          </Col>
        </Row>
      </Container>
  
      <Container>
        <Row>
          <Col xs="12">
            <SectionBanner
              title={t('about.banner.title')}
              content={t('about.banner.text')}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
};
