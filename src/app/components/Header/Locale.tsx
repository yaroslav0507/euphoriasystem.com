import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LocaleBox = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 12px;
  background-color: rgba(255, 255, 255, 0.075);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Flag = styled.div<{ url: string; isUA: boolean }>`
  border-radius: 2px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: 0 center;

  transform: ${({ url }) => url === UA ? 'translate3d(0, 0, 0);' : 'rotateY(180deg) translateZ(1px);'};
  position: absolute;
`;

const FlagsGroup = styled.div<{ isUA: boolean }>`
  width: 36px;
  height: 20px;
  position: relative;
  transform-style: preserve-3d;
  

  ${Flag} {
    top: 0;
    width: 100%;
    height: 100%;
    
  }

  transition: transform .3s ease;
  transform: ${({ isUA }) => isUA ? 'none' : 'rotateY(180deg)'}
`;

type TLocale = "en" | "ua";

export const Locale = () => {
  const { i18n } = useTranslation();
  const isUA = i18n.language === "ua";

  const [url, setUrl] = useState(isUA ? UA : EN);
  const changeLanguage = (lng: TLocale) => {
    i18n.changeLanguage(lng);
  };


  const toggleLocale = () => {
    changeLanguage(isUA ? "en" : "ua");
  };

  return (
    <LocaleBox onClick={toggleLocale}>
      <FlagsGroup isUA={isUA}>
        <Flag url={UA} isUA={isUA} />
        <Flag url={EN} isUA={isUA} />
      </FlagsGroup>
    </LocaleBox>
  );
};
