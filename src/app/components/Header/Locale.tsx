import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LocaleBox = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 8px;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.074);
  }
`;

const Flag = styled.div<{ url: string }>`
  width: 32px;
  height: 18px;
  border-radius: 2px;
  background-image: url(${({ url }) => url });
  background-size: cover;
  background-position: 0 center;
`;

type Locale = "en" | "ua";

export const Locale = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'ua') => {
    i18n.changeLanguage(lng);
  };

  const isUA = i18n.language === "ua";

  const toggleLocale = () => {
    changeLanguage(isUA ? "en" : "ua");
  };

  return (
    <LocaleBox onClick={toggleLocale}>
      <Flag url={isUA ? UA : EN}/>
    </LocaleBox>
  );
};
