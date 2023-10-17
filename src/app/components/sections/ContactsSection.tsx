import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import IconCall from "../../img/icons/icon_call.svg";
import BgHomeVortex from "../../img/bg_home-vortex_x2.webp";
import IconInstagram from "../../img/icons/icon_instagram.svg";
import IconTelegram from "../../img/icons/icon_telegram.svg";
import IconArrow from "../../img/icons/icon_arrow.svg";
import FlagUA from "../../img/langs/ua.svg";
import ImgMap from "../../img/bg_map.png";
import styled from "styled-components";
import { SectionBanner } from "../shared/SectionBanner";
import { ScrollTop } from "../shared/ScrollTop";
import { useTranslation } from "react-i18next";
import { device } from "../shared/breakpoints";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";
import { BackgroundSection } from "../shared/common";
import { Price } from "../Price";


const ContactsWrapper = styled.div`
  background: radial-gradient(#06121d, #08182696, transparent);
  
  padding-bottom: 40px;
  position: relative;

  h4 {
    margin-bottom: 12px;
  }
`;

const ContactIcon = styled.div`
  display: flex;
  height: 70px;
  width: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
`;

const Contact = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 18px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 15px;
  background: rgba(0, 15, 30, 0.75);
  margin-bottom: 32px;

  ${device.xs} {
    font-size: 20px;
  }

  &:hover {
    ${ContactIcon} {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Map = styled.div<{ $url: string }>`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 270px;
  width: 100%;
  background: url(${({ $url }) => $url});
  background-size: cover;
  background-position: 0 30%;
`;

const Legend = styled.div`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  padding: 22px 27px;
`;

const ImgFlag = styled.img`
  width: 32px;
`;

const ImgArrow = styled.img`
  margin-top: -50px;
`;

const ContactsBackgroundSection = styled(BackgroundSection)`
  opacity: .2;
  animation: none;
  background-size: contain;
  background-position: center bottom;
  transform: scale(-1);

  ${device.sm} {
    opacity: .4;
    filter: blur(30px);
  }
  
  ${device.xl} {
    opacity: 1;
  }
`;

export const ContactsSection = () => {
  const { t } = useTranslation();

  const logAnalytics = (key: 'phone' | 'telegram' | 'instagram') => {
    logEvent(analytics, 'generate_lead', { key });
  }

  const contacts = [
    {
      icon: IconCall,
      text: "+38 (093) 349 58 11",
      link: "tel:+380933495811",
      target: '_self',
      onClick: () => logAnalytics('phone')
    },
    {
      icon: IconTelegram,
      text: "@euphoriasystem.sadhu",
      link: "https://t.me/yaroslav0507",
      target: '_blank',
      onClick: () => logAnalytics('telegram')
    },
    {
      icon: IconInstagram,
      text: "@euphoriasystem.sadhu",
      link: "https://www.instagram.com/euphoriasystem.sadhu",
      target: '_blank',
      onClick: () => logAnalytics('instagram')
    },
  ];

  return (
    <ContactsWrapper className="pt-xl-4">
      <Container id="contacts">
        <Row>
          <Col xs="12">
            <SectionHeader
              name={t('contacts.name')}
              title={t('contacts.title')}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6" xl="4" className="mb-5">
            {contacts.map((contact, index) => (
              <Contact
                key={index}
                href={contact.link}
                target={contact.target}
                onClick={contact.onClick}
              >
                <ContactIcon>
                  <img src={contact.icon} />
                </ContactIcon>

                <span>{contact.text}</span>
              </Contact>
            ))}
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-5">
            <Map $url={ImgMap}>
              <Legend>
                {t('contacts.map')}
                <ImgFlag src={FlagUA} alt="We Are Here" />
                <ImgArrow src={IconArrow} />
              </Legend>
            </Map>
          </Col>

          <Col xs="12" md="12" xl="4" className="mb-5">
            <h4 className="mb-2">{t('contacts.delivery.title')}</h4>

            <p className="mb-5 mb-xl-2">
              {t('contacts.delivery.text')}
            </p>

            <h4 className="mb-5 mb-xl-0">{t('contacts.pricing.title')}</h4>

            <Price usd={150}/> 
          </Col>

          <Col xs="12">
            <SectionBanner
              $bgSize="cover"
              $bgPosition="10% 0"
              buttonLink="#contacts"
              title={t('contacts.banner.title')}
              content={t('contacts.banner.text')}
              translationKey="contacts.banner.button"
            />
          </Col>

          <Col xs="12" className="animate__animated animate__fadeInUp reveal">
            <ScrollTop />
          </Col>
        </Row>
      </Container>

      <ContactsBackgroundSection $bg={BgHomeVortex} />
    </ContactsWrapper>
  );
};
