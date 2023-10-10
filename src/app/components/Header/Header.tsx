import Logo from "../../img/logo_euhoriasystem.svg";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Locale } from "./Locale";
import { Menu } from "./Menu";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const HeaderWrapper = styled.div`
  height: 75px;
  padding: 12px 0;
`;

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: ${(props) => props.justify};
`;

const HeaderControls = styled(HeaderCol) <{
  sticky?: boolean;
  visible?: boolean;
  animate?: boolean;
}>`
  opacity: ${({ visible }) => visible ? '1' : '0'};
  position: ${({ visible }) => visible ? 'auto' : 'fixed'};
  border-radius: 5px;
  right: 12px;
  top: 12px;
  z-index: 3;

  ${({ animate }) => animate && `
    transition: all .5s ease;
  `}

  ${({ visible }) => !visible && `
    position: fixed;
    background: #ffffff1c;
    width: auto;
    height: 40px;
    margin: 3px 0;
    padding: 7px 8px 7px 0;
    transform: translateY(-100px);
  `};

  ${({ sticky }) => sticky && `
    opacity: 1;
    transform: none;
    margin: 0;
  `}
`;

export const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(menuRef)
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const cb = () => setScrollTop(window.scrollY);

    window.addEventListener("scroll", cb);
    return () => {
      window.removeEventListener("scroll", cb);
    };
  }, []);

  const isSticky = scrollTop >= window.innerHeight;
  const shouldAnimate = scrollTop >= window.innerHeight / 2;

  return (
    <HeaderWrapper id="home">
      <Container>
        <Row ref={menuRef}>
          <HeaderCol xs="6">
            <img src={Logo} alt="Logo" />
          </HeaderCol>

          <HeaderControls
            xs="6"
            justify="flex-end"
            sticky={isSticky}
            visible={isVisible}
            animate={shouldAnimate}
          >
            <Locale />
            <Menu />
          </HeaderControls>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};
