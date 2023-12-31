import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { displayUkrainian } from "../../../i18n";
import { createTransformAnimation } from "../shared/animations";

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

const Flag = styled.div<{ $url: string; }>`
  ${createTransformAnimation('flip', 'rotateY(180deg)' , 'none')}

  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: 0 center;
`;

const FlagsGroup = styled.div<{ $isUA: boolean }>`
  width: 36px;
  height: 20px;
  position: relative;
  transition: transform .5s ease;
  transform: ${({ $isUA }) => $isUA ? 'rotateY(180deg)' : 'none'}
`;

type TLocale = "en" | "uk";

export const Locale = () => {
  const { i18n } = useTranslation();
  const isUA = displayUkrainian(i18n.language);

  const selectLanguage = (lng: TLocale) => {
    i18n.changeLanguage(lng);
  };

  const toggleLocale = () => {
    selectLanguage(isUA ? "en" : "uk");
  };

  return (
    <LocaleBox onClick={toggleLocale}>
      <FlagsGroup $isUA={isUA}>
        <Flag $url={isUA ? UA : EN} />
      </FlagsGroup>
    </LocaleBox>
  );
};
