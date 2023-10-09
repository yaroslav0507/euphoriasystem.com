import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import styled from "styled-components";
import { useState } from "react";

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
  const [locale, setLocale] = useState<Locale>("en");
  const isUA = locale === "ua";

  const toggleLocale = () => {
    setLocale(isUA ? "en" : "ua");
  };

  return (
    <LocaleBox onClick={toggleLocale}>
      <Flag url={isUA ? UA : EN}/>
    </LocaleBox>
  );
};
