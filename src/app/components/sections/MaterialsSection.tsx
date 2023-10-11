
import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import BgCooper from "../../img/bg_cooper.jpg";
import BgAluminium from "../../img/bg_aluminium.jpg";
import { ImageSection, SectionTextWrapper, SiteButton } from "../shared/common";
import styled from "styled-components";
import { SectionBanner } from "../shared/SectionBanner";
import { useTranslation } from "react-i18next";

const SectionRow = styled(Row)`
  background: #031837;
  margin-bottom: 80px;
`;

export const MaterialsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container id="materials">
        <Row>
          <Col xs="12">
            <SectionHeader 
              name={t('materials.name')} 
              title={t('materials.title')} 
            />
          </Col>
        </Row>
      </Container>
  
      <Container fluid>
        <SectionRow className="flex-md-row-reverse">
          <Col xs="12" md="6">
            <ImageSection
              url={ BgCooper } 
              direction="left"
              bgSize="auto 140%"
              bgPosition="80% 20%"
            />
          </Col>
  
          <Col xs="12" md="6" className="d-flex align-items-center">
            <SectionTextWrapper>
              <h3>
                { t('materials.cooper.title') }
              </h3>
  
              <p>
                {t('materials.cooper.text')}
              </p>

              <SiteButton>{t('materials.cooper.button')}</SiteButton>
            </SectionTextWrapper>
          </Col>
        </SectionRow>
  
        <Row>
          <Col xs="12" className="text-center mb-5">
            <h3>{t('materials.divider')}</h3>
          </Col>
        </Row>
  
        <SectionRow className="mb-5">
          <Col xs="12" md="6">
            <ImageSection
              url={ BgAluminium } 
              direction="right"
              bgSize="auto 120%"
              bgPosition="35% 50%"
            />
          </Col>
  
          <Col xs="12" md="6" className="d-flex align-items-center">
            <SectionTextWrapper>
              <h3>
                { t('materials.aluminium.title') }
              </h3>
  
              <p>
                {t('materials.aluminium.text')}
              </p>

              <SiteButton>{t('materials.aluminium.button')}</SiteButton>
            </SectionTextWrapper>  
          </Col>
        </SectionRow>

        <Row>
          <Col xs="12">
            <SectionBanner
              bgSize="cover"
              bgPosition="10% 0"
              title={t('materials.guide.title')}
              content={t('materials.guide.text')}
              buttonText={t('materials.guide.button')}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
};
