import Logo from "../../img/logo_euhoriasystem.svg";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import { useState } from "react";

const HeaderWrapper = styled.div`
  height: 55px;
  margin: 12px 0;
`;

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

const LocaleBox = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 8px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.074);
  }
`;

type Locale = "en" | "ua";

export const Header = () => {
  const [locale, setLocale] = useState<Locale>("en");
  const isUA = locale === "ua";

  const toggleLocale = () => {
    setLocale(isUA ? "en" : "ua");
  };

  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <HeaderCol xs="6">
            <img src={Logo} alt="Logo" />
          </HeaderCol>

          <HeaderCol xs="6" justify="flex-end">
            <LocaleBox>
              <img
                alt="Locale"
                aria-label="Locale"
                src={isUA ? UA : EN}
                onClick={toggleLocale}
              />
            </LocaleBox>
          </HeaderCol>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};
