import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import IconCall from "../../img/icons/icon_call.svg";
import IconInstagram from "../../img/icons/icon_instagram.svg";
import IconTelegram from "../../img/icons/icon_telegram.svg";
import IconArrow from "../../img/icons/icon_arrow.svg";
import FlagUA from "../../img/langs/ua.svg";
import ImgMap from "../../img/bg_map.png";
import styled from "styled-components";
import { SiteButton } from "../shared/common";
import { SectionBanner } from "../shared/SectionBanner";
import { ScrollTop } from "../shared/ScrollTop";

const ContactsWrapper = styled.div`
  background: radial-gradient(#14385a, #14385a96, transparent);
  padding-bottom: 40px;
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

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-weight: 700;
  font-size: 20px;
  border-radius: 15px;
  background: rgba(0, 15, 30, 0.75);
  margin-bottom: 32px;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    ${ContactIcon} {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Map = styled.div<{ url: string }>`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 270px;
  width: 100%;
  background: url(${({ url }) => url});
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

export const ContactsSection = () => {
  const contacts = [
    {
      icon: IconCall,
      text: "+38 (093) 349-58-11",
      link: "tel:+380933495811",
    },
    {
      icon: IconTelegram,
      text: "@euphoriasystem.sadhu",
      link: "https://t.me/yaroslav0507",
    },
    {
      icon: IconInstagram,
      text: "@euphoriasystem.sadhu",
      link: "https://www.instagram.com/euphoriasystem.sadhu",
    },
  ];

  return (
    <ContactsWrapper>
      <Container>
        <Row>
          <Col xs="12">
            <SectionHeader
              subtitle="Contacts"
              title="Call/Text us To Purchase"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="mb-5">
            {contacts.map((contact, index) => (
              <Contact key={index}>
                <ContactIcon>
                  <img src={contact.icon} />
                </ContactIcon>

                <a href={contact.link} target="_blank">
                  {contact.text}
                </a>
              </Contact>
            ))}
          </Col>

          <Col xs="12" className="mb-5">
            <Map url={ImgMap}>
              <Legend>
                We Are Here
                <ImgFlag src={FlagUA} alt="We Are Here" />
                <ImgArrow src={IconArrow} />
              </Legend>
            </Map>
          </Col>

          <Col xs="12" className="mb-5">
            <h4>Delivery</h4>

            <p className="mb-5">
              We ship our boards worldwide except russia and belarus. Delivery
              by Ukraine is done by Nova Poshta provider.
              <br />
              <br />
              Ukr Poshta is used for the delivery to other countries, or you can
              propose your own way of logistics to our managers.
            </p>

            <h4>Pricing</h4>

            <p className="mb-5">
              Please contact our managers in order to get the actual price for
              our sadhu boards.
            </p>
          </Col>

          <Col xs="12">
            <SectionBanner
              bgSize="cover"
              bgPosition="10% 0"
              title="Ready to purchase or have any Questions?"
              content={
                "Request a free consultation to study your case and help you find a right board for your needs."
              }
              render={
                <SiteButton className="mt-5">Request a callback</SiteButton>
              }
            />
          </Col>

          <Col xs="12">
            <ScrollTop />
          </Col>
        </Row>
      </Container>
    </ContactsWrapper>
  );
};
