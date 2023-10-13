import styled from "styled-components";
import IconUp from "../../img/icons/icon_up.svg";
import { FC } from "react";

export const ScrollTopElement = styled.div<{ visible: boolean }>`
  width: 84px;
  height: 84px;
  margin: 40px auto;
  border-radius: 100%;
  cursor: pointer;
  background-image: url(${IconUp});
  background-position: center;
  transition: opacity .3s ease;
  background-color: rgba(25, 64, 103, 0.79);

  &:hover {
    background-color: rgba(25, 64, 103, 0.9);
  } 
`;

interface IScrollTopProps {
  visible: boolean;
}

export const ScrollTop: FC<IScrollTopProps> = ({ visible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const classNames = ['animate__animated'];

  if (visible) {
    classNames.push('animate__fadeInUp');
  }

  return (
    <ScrollTopElement
      visible={visible}
      onClick={scrollToTop}
      className={classNames.join(' ')}
    />
  );
};
