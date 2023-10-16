import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import QuoteStart from '../../img/quote_start.svg';
import QuoteEnd from '../../img/quote_end.svg';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { device } from "../shared/breakpoints";

const Review = styled.div`
  color: #000;
  margin-bottom: 57px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    transform: translateY(-30%);
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    padding-bottom: 100%;
    height: auto;
    display: block;
    opacity: .5;
    background: radial-gradient(#ffffff85, #ffffff36, #fbfbfb12, transparent, transparent);
  }
`;

const ReviewImg = styled.div<{ $url: string }>`
  width: 150px;
  height: 150px;
  margin-top: -100%;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
`;

const ReviewContainer = styled.div`
  gap: 8px;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  padding: 90px 20px 28px;
  margin-top: -75px;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(214, 232, 253, 0.90) 100%);
`;

const ReviewTitle = styled.div`
  font-size: 22px;
  font-weight: 700;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
  }

  &:before {
    top: 50px;
    left: 30px;
    background: url(${QuoteStart});
  }

  &:after {
    top: 120px;
    right: 30px;
    background: url(${QuoteEnd});
  }
`;

const ReviewSubtitle = styled.div`
  font-size: 14px;
  color: #03030F;
`;

const ReviewInsta = styled(ReviewSubtitle)`
  color: #11345C;
  margin-bottom: 12px;
`;

const ReviewContent = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: left;    
  font-weight: 400;
  color: #01152d;


  ${device.xs} {
    font-size: 18px;
    line-height: 24px;
  }
`;


export const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = new Array(3).fill(null);

  return (
    <>
      <Container id="reviews" className="pb-xl-5">
        <Row>
          <Col xs="12">
            <SectionHeader
              name={t('reviews.name')}
              title={t('reviews.title')}
            />
          </Col>
        </Row>

        <Row className="align-items-end justify-content-center overflow-hidden mb-5">
          {reviews.map((review, index) => (
            <Col key={index} xs="12" md="6" lg="4" className="animated__animate animate__fadeInUp reveal">
              <Review>
                <ReviewImg $url={t(`reviews.items.${index}.img`)} />

                <ReviewContainer>
                  <ReviewTitle>{t(`reviews.items.${index}.title`)}</ReviewTitle>
                  <ReviewSubtitle>{t(`reviews.items.${index}.subtitle`)}</ReviewSubtitle>
                  <ReviewInsta>{t(`reviews.items.${index}.insta`)}</ReviewInsta>
                  <ReviewContent>{t(`reviews.items.${index}.content`)}</ReviewContent>
                </ReviewContainer>
              </Review>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
