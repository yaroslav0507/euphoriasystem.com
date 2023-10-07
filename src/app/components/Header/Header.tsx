import Logo from "../../img/logo_euhoriasystem.svg";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderWrapper = styled.div`
  height: 55px;
  margin: 12px 0;
`;

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <HeaderCol xs="6">
            <img src={Logo} alt="Logo" />
          </HeaderCol>

          <HeaderCol xs="6" justify="flex-end">
            Menu
          </HeaderCol>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};
