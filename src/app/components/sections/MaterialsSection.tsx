
import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import BgCooper from "../../img/bg_cooper.jpg";
import BgAluminium from "../../img/bg_aluminium.jpg";
import { ImageSection, SectionTextWrapper, SiteButton } from "../shared/components";
import styled from "styled-components";
import { SectionBanner } from "../shared/SectionBanner";

const SectionRow = styled(Row)`
  background: #031837;
  padding-bottom: 84px;
  margin-bottom: 48px;
`;

export const MaterialsSection = () => (
  <>
    <Container>
      <Row>
        <Col xs="12">
          <SectionHeader subtitle="Materials" title="Which materials do we use" />
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
              Cooper
            </h3>

            <p>
            Copper is highly resistant to corrosion and rust. When used outdoors , copper nails are less likely to degrade over time compared to steel or iron nails. 
            Due to the natural antimicrobial properties, it can help inhibit the growth of bacteria, fungi, and other microorganisms.
            <br/>
            <br/>
            This excellent conductor of electricity has great aesthetic qualities and requires low maintenance. Due to their corrosion resistance, copper nails require minimal care in comparison to other metals. They can last for an extended period without the need for replacement or frequent upkeep.
            </p>
          </SectionTextWrapper>

          <SiteButton>Choose Cooper Nails</SiteButton>
        </Col>
      </SectionRow>

      <Row>
        <Col xs="12" className="text-center mb-4">
          <h3>And</h3>
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
            Aluminium
            </h3>

            <p>
              Aluminum is a non-magnetic, low maintenance, corrosion resistant material with extremely light weight, making this nails easy to handle and transport. This property is particularly useful when traveling. Sadhu boards with a step of 10 MM weights only 288g, and that’s impressive factor counting on the useful area covered by nails.<br/>
            <br/>
              This kind of nails are naturally resistant to corrosion, as aluminium forms a protective oxide layer when exposed to air. This corrosion resistance makes this king of nails suitable for outdoor usage.  Aluminum is an excellent conductor of electricity. This property makes aluminum nails suitable for practice on the earth.
            </p>
          </SectionTextWrapper>

          <SiteButton>Choose Aluminium Nails</SiteButton>
        </Col>

        <Col xs="12">
          <SectionBanner
            bgSize="cover"
            bgPosition="10% 0"
            title="How to choose Material"
            content={`Choosing a material is a first and as important  as choosing  step  of nails. Our team made an investigation during which our engineer was standing on the different types of sadhu boards during 145 days for an hour and  more  noticing the difference in his perception. 
            
            Cooper nails are subjectively “softer” than all other types. The practice is soft and smooth, even if you’re standing for an hour or more. 
            
            Aluminum nails are the perfect choice for those who needs to be dynamic. The weigh of 288g doesn’t stop you from taking them everywhere with you. Just imagine staying on the nails at the top of the mountain (in expeditions the total weight of your baggage matters). This metal, as well  as cooper,  is a perfect current conductor that allows you  to use sadhu  boards with  open nails for earthing on the nature.`
            }
            render={<SiteButton className="mt-5">Get a Free Consultation</SiteButton>}
          />
        </Col>
      </SectionRow>
    </Container>
  </>
);
