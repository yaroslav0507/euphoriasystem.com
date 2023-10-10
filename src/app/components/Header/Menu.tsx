import { useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useTranslation } from "react-i18next";

const MenuButtonContainer = styled.div<{ open: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const MenuButton = styled.div<{ open: boolean }>`
  &,
  &:before,
  &:after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 3px;
    width: 30px;
    transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
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
      transform: rotate(405deg);
    }

    &:after {
      margin-top: 0px;
      transform: rotate(-405deg);
    }
  `}
`;

const MenuContainer = styled.div<{ open: boolean }>`
  background: #02162e;
  color: #fff;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 3;
  opacity: 0;
  bottom: 0;
  transform: translateY(150%);
  transition: all .3s ease;
  box-shadow: 0 -30px 70px #00000094;

  ${({ open }) => open && `
    opacity: 1;
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

export const Menu = () => {
  const { t } = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  };

  const ref = useClickOutside(() => setMenuOpened(false));

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

  return (
    <div ref={ref}>
      <MenuButtonContainer
        open={menuOpened}
        onClick={toggleMenu}
      >
        <MenuButton open={menuOpened} />
      </MenuButtonContainer>

      <MenuContainer open={menuOpened}>
        <ul className="menu">
          {anchors.map(({ name, link }, idx) => (
            <li key={idx} onClick={() => setMenuOpened(false)}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </MenuContainer>
    </div>
  )
}