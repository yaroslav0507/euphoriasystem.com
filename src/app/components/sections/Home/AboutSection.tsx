import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../../shared/SectionHeader";

export const AboutSection = () => (
  <Container>
    <Row>
      <Col xs="12">
        <SectionHeader subtitle="About" title="What is a Sadhu Board" />
      </Col>
    </Row>
  </Container>
);
