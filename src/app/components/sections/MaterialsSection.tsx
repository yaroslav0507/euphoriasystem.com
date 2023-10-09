
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
  padding-bottom: 84px;
  margin-bottom: 48px;
`;

export const MaterialsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <SectionHeader 
              subtitle={t('materials.subtitle')} 
              title={t('materials.title')} 
            />
          </Col>
        </Row>
      </Container>
  
      <Container fluid>
        <SectionRow>
          <Col xs="12">
            <ImageSection
              url={ BgCooper } 
              direction="right"
              bgSize="auto 140%"
              bgPosition="80% 20%"
            />
          </Col>
  
          <Col xs="12">
            <SectionTextWrapper>
              <h3>
                { t('materials.cooper.title') }
              </h3>
  
              <p>
                {t('materials.cooper.text')}
              </p>
            </SectionTextWrapper>
  
            <SiteButton>{t('materials.cooper.button')}</SiteButton>
          </Col>
        </SectionRow>
  
        <Row>
          <Col xs="12" className="text-center mb-4">
            <h3>{t('materials.divider')}</h3>
          </Col>
        </Row>
  
        <SectionRow>
          <Col xs="12">
            <ImageSection
              url={ BgAluminium } 
              direction="left"
              bgSize="auto 120%"
              bgPosition="35% 50%"
            />
          </Col>
  
          <Col xs="12" className="mb-5">
            <SectionTextWrapper>
              <h3>
                { t('materials.aluminium.title') }
              </h3>
  
              <p>
                {t('materials.aluminium.text')}
              </p>
            </SectionTextWrapper>
  
            <SiteButton>{t('materials.aluminium.button')}</SiteButton>
          </Col>
  
          <Col xs="12">
            <SectionBanner
              bgSize="cover"
              bgPosition="10% 0"
              title={t('materials.guide.title')}
              content={t('materials.guide.text')}
              render={<SiteButton className="mt-5">{t('materials.guide.button')}</SiteButton>}
            />
          </Col>
        </SectionRow>
      </Container>
    </>
  )
};
