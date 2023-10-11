import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import AboutImage from "../../img/about_section_image.jpg";
import { SectionBanner } from "../shared/SectionBanner";
import { ImageSection, SectionTextWrapper } from "../shared/common";
import { useTranslation } from "react-i18next";

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
          <Col xs="12" md="6">
            <ImageSection
              direction="right"
              bgColor="#01162d"
              url={ AboutImage }
            />
          </Col>
  
          <Col xs="12" md="6" className="d-flex align-items-center">
            <SectionTextWrapper>
              <h3>
                {t('about.description.title')}
              </h3>
  
              <p>
                {t('about.description.text')}
              </p>
            </SectionTextWrapper>
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
