import styled from "styled-components";
import IconUp from "../../img/icons/icon_up.svg";

export const ScrollTopElement = styled.div`
  width: 84px;
  height: 84px;
  margin: 40px auto;
  border-radius: 100%;
  cursor: pointer;
  background-image: url(${IconUp});
  background-position: center;
  background-color: rgba(25, 64, 103, 0.79);

  &:hover {
    background-color: rgba(25, 64, 103, 0.9);
  } 
`;

export const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <ScrollTopElement onClick={scrollToTop} />;
};
