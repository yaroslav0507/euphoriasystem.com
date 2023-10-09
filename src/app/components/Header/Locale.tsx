import EN from "../../img/langs/en.svg";
import UA from "../../img/langs/ua.svg";
import styled from "styled-components";
import { useState } from "react";

const LocaleBox = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 8px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.074);
  }
`;

type Locale = "en" | "ua";

export const Locale = () => {
  const [locale, setLocale] = useState<Locale>("en");
  const isUA = locale === "ua";

  const toggleLocale = () => {
    setLocale(isUA ? "en" : "ua");
  };

  return (
    <LocaleBox>
      <img
        alt="Locale"
        aria-label="Locale"
        src={isUA ? UA : EN}
        onClick={toggleLocale}
      />
    </LocaleBox>
  );
};
