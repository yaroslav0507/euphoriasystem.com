import Logo from "../../img/logo_euhoriasystem.svg";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Locale } from "./Locale";
import { Menu } from "./Menu";
import { useEffect, useMemo, useState } from "react";
import { device } from "../shared/breakpoints";

export const headerHeight = '100px';

const HeaderWrapper = styled.div`
  height: ${headerHeight};
  padding: 12px 0;
  display: flex;

  ${device.sm} {
    align-items: center;
  }
`;

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: ${(props) => props.justify};
`;

const HeaderControls = styled.div<{
  $isSticky?: boolean;
  $isStatic?: boolean;
  $shouldAnimate?: boolean;
}>`
  opacity: ${({ $isStatic }) => $isStatic ? '1' : '0'};
  position: ${({ $isStatic }) => $isStatic ? 'initial' : 'fixed'};
  display: flex;
  border-radius: 5px;
  z-index: 3;
  position: absolute;

  ${({ $shouldAnimate }) => $shouldAnimate && `
    transition: transform .5s ease;
    transform: translateY(-100%);
  `}

  ${({ $isStatic }) => !$isStatic && `
    position: fixed;
    background: #ffffff1c;
    width: auto;
    margin: 12px;
    padding: 0 8px 0 0;
    right: 0;
    top: 0;
  `};

  ${({ $isSticky }) => $isSticky && `
    opacity: 1;
    transform: none;

    .menu-button {
      &,
      &:before,
      &:after {
        position: absolute;
      }
    }
  `}

  ${device.xs} {
    gap: 12px;
  }
`;


export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const cb = () => setScrollTop(window.scrollY);

    window.addEventListener("scroll", cb);
    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);

  const STATIC_MENU_VISIBILITY_OFFSET = window.innerHeight - 1;
  const isStatic = scrollTop <= STATIC_MENU_VISIBILITY_OFFSET;
  const isSticky = scrollTop >= window.innerHeight;
  const shouldAnimate = scrollTop >= window.innerHeight / 2;

  return useMemo(() => (
    <HeaderWrapper id="home">
      <Container>
        <Row>
          <HeaderCol xs="6">
            <img src={Logo} alt="Logo" />
          </HeaderCol>

          <HeaderCol
            xs="6"
            justify="flex-end"
          >
            <HeaderControls
              $isSticky={isSticky}
              $isStatic={isStatic}
              $shouldAnimate={shouldAnimate}
            >
              <Locale />
              <Menu scrollTop={scrollTop}/>
            </HeaderControls>
          </HeaderCol>
        </Row>
      </Container>
    </HeaderWrapper>
  ), [isStatic, isSticky, shouldAnimate]);
};
