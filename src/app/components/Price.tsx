import { t } from "i18next";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import { device } from "./shared/breakpoints";
import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { displayUkrainian } from "../../i18n";

const PriceWrapper = styled.span`
  position: relative;
  font-size: 85px;
  font-weight: 700;
  padding-top: 32px;
  display: flex;
  justify-content: center;

  ${device.xl} {
    padding-top: 0;
  }
`;

const PriceBefore = styled.div`
  margin: auto;
  font-size: 28px;
  font-weight: 400;
  padding: 5px 10px;
  line-height: 1em;
  position: absolute;
  border-radius: 5px;
  background: #ffffff1f;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 18px;
    width: 85%;
    height: 2px;
    background: #ffffffe8;
  }

  ${device.xl} {
    left: initial;
    right: 0;
    top: -30px;
    font-size: 24px;
  }
`;

const PriceNow = styled.div`
  font-size: 65px;
  min-width: 280px;
  font-weight: 700;
  padding-top: 38px;
  position: relative;
  z-index: 0;

  &:before {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    content: '';
    width: 280px;
    padding-top: 100%;
    background: radial-gradient(#52acb6c9, transparent);
    position: absolute;
    filter: blur(70px);
    z-index: -1;
  }

  ${device.xs} {
    font-size: 85px;
  }

  ${device.xl} {
    padding-top: 0;
    font-size: 75px;

    &:before {
      filter: blur(140px);
    }
  }

  ${device.xxl} {
    padding-top: 0;
    font-size: 85px;
  }
`;

const Descriptor = styled.div`
  font-size: 12px;
  max-width: 210px;
  text-align: center;
  margin: auto;

  ${device.sm} {
    margin-top: 0;
    max-width: 320px;
  }

  ${device.md} {
    font-size: 14px;
  }

  ${device.xl} {
    font-size: 12px;
    text-align: left;
    margin-top: -24px;
  }

  ${device.xxl} {
    font-size: 14px;
  }

  &:before {
    content: '*';
    transform: translateX(-100%);
    position: absolute;
  }
`

const Currency = styled.span<{ $size: string; }>`
  opacity: .75;
  font-size: ${({ $size }) => $size};
`;

interface IPriceProps {
  usd: number;
}

const currencyUSD = '$';
const currencyUAH = 'грн';
const prevPriceCoef = 1.33333;
const darkMarketCoef = 1.0597;
const exchangeApiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json';

const fetchCurrencyRate = async (): Promise<number> => {
  const response = await fetch(exchangeApiUrl);
  const [usd] = await response.json();
  return usd?.rate;
}

export const Price: FC<IPriceProps> = ({ usd }) => {
  const { i18n } = useTranslation();
  const isUA = displayUkrainian(i18n.language);
  const [exchangeRate, setExchangeRate] = useState(0);
  const prevPriceUsd = Math.ceil(usd * prevPriceCoef);

  const createPrice = (value: number) => Math.ceil(isUA
    ? exchangeRate * value * darkMarketCoef
    : value);

  const prevPrice = createPrice(prevPriceUsd);
  const price = createPrice(usd);

  useEffect(() => {
    const setCurrencyRate = async () => {
      const rate = await fetchCurrencyRate();
      setExchangeRate(rate);
    }

    if (isUA && !exchangeRate) {
      setCurrencyRate();
    }
  }, [isUA]);

  return (
    <Row className="mb-5 mb-xl-0 pt-5 pt-xl-0">
      <Col xs="12" xl="8" className="text-center">
        <PriceWrapper>
          <PriceBefore>
            {!isUA && <Currency $size="28px">{currencyUSD}</Currency>}
            {prevPrice}
            {isUA && <Currency $size="24px">{currencyUAH}</Currency>}
          </PriceBefore>

          <PriceNow>
            {!isUA && <Currency $size="80px">{currencyUSD}</Currency>}
            {price}
            {isUA && <Currency $size="47px">{currencyUAH}</Currency>}
          </PriceNow>
        </PriceWrapper>
      </Col>

      <Col xs="12" xl="4" className="d-flex align-items-center">
        <Descriptor>{t('contacts.pricing.text')}</Descriptor>
      </Col>
    </Row>
  );
}