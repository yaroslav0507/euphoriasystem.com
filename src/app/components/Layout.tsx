import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Header } from "./Header/Header";
import { HomeSection } from "./sections/Home/HomeSection";

export const Layout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>

        <Col>
          <HomeSection />
        </Col>
      </Row>
    </Container>
  );
};
