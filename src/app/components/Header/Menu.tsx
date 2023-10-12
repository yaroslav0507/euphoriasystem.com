import { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { createTransformAnimation } from "../shared/animations";

const Backdrop = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #0000007d;
  top: 0;
  left: 0;
  z-index: 0;
`;

const MenuButtonContainer = styled.div<{ open: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const MenuButton = styled.div<{ open: boolean }>`
  ${createTransformAnimation('rotateLeft', 'rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, -45deg)')}
  ${createTransformAnimation('rotateRight', 'rotate3d(0, 0, 1, 0deg)', 'rotate3d(0, 0, 1, 45deg)')}

  &,
  &:before,
  &:after {
    display: flex;
    background-color: #fff;
    height: 2px;
    width: 30px;
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
    -webkit-transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    position: ${({ open }) => open ? 'absolute' : 'initial'};
    will-change: animation;
    backface-visibility: hidden;
  }

  &:before {
    content: '';
    margin-top: -8px;
  }

  &:after {
    content: '';
    margin-top: 8px;
  }

  ${({ open }) => open && `
    && {
      background-color: transparent;
    }
    
    &:before {
      margin-top: 0px;
      animation: rotateLeft .5s forwards;
    }

    &:after {
      margin-top: 0px;
      animation: rotateRight .5s forwards;
    }
  `}
`;

const MenuContainer = styled.div<{ open: boolean }>`
  left: 0;
  bottom: 0;
  z-index: 3;
  opacity: 1;
  color: #fff;
  width: 100%;
  display: none;
  position: fixed;
  background: #02162e;

  ${({ open }) => open && `
    display: block;
    transform: none;
  `}

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 20px;
      border-bottom: 1px solid #ffffff15;
      
      a {
        display: block;
        color: #fff;
        padding: 20px;
        text-decoration: none;

        &:hover,
        &:active {
          color: #ffc700;
          background: #0000004f;
        }
      }

      &:last-child {
        border: none;
      }
    }
  }
`;

interface IMenuProps {
  scrollTop?: number;
}

export const Menu: FC<IMenuProps> = ({ scrollTop }) => {
  const { t } = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) {
      setMenuOpened(false);
    }
  }, [scrollTop]);
  
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  };

  const anchors = [
    {
      name: t('menu.home'),
      link: '#home'
    },
    {
      name: t('menu.about'),
      link: '#about'
    },
    {
      name: t('menu.materials'),
      link: '#materials'
    },
    {
      name: t('menu.reviews'),
      link: '#reviews'
    },
    {
      name: t('menu.contacts'),
      link: '#contacts'
    },
  ];

  return useMemo(() => 
    <>
      <MenuButtonContainer
        open={menuOpened}
        onClick={toggleMenu}
      >
        <MenuButton className="menu-button" open={menuOpened} />
      </MenuButtonContainer>

      { menuOpened && <Backdrop onClick={() => setMenuOpened(false)}/>}
      
      <MenuContainer open={menuOpened}>
        <ul className="menu">
          {anchors.map(({ name, link }, idx) => (
            <li key={idx} onClick={() => setMenuOpened(false)}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </MenuContainer>
    </>
  , [menuOpened]);
}