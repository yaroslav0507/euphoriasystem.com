import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader } from "../shared/SectionHeader";
import ReviewRajesh from '../../img/reviews/review_rajesh.png';
import RevievGandhi from '../../img/reviews/review_gandhi.png';
import RevievSadhguru from '../../img/reviews/review_sadhguru.png';
import QuoteStart from '../../img/quote_start.svg';
import QuoteEnd from '../../img/quote_end.svg';
import styled from 'styled-components';

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

const ReviewImg = styled.div<{ url: string }>`
  width: 150px;
  height: 150px;
  margin-top: -100%;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;
  background: url(${({ url }) => url});
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
    width: 35px;
    height: 35px;
  }

  &:before {
    top: 70px;
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
  font-weight: 200;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
`;


export const ReviewsSection = () => {
  const reviews = [{
    img: ReviewRajesh,
    title: 'Sri Rajesh Maharaja',
    subtitle: 'Mystic / Yogi / Crypto Investor',
    insta: '@rajeshsadhu',
    content: 'Sadhu boards from Euphoria System is the best that was with me since my last regeneration on the wheel of Sansara. Will Definitely recommend to my sadhu friends.'
  }, {
    img: RevievGandhi,
    title: 'Mahatma Gandhi',
    subtitle: 'Mystic / Yogi / Influencer',
    insta: '@gandiofficial',
    content: 'You must be the change that you wish to see in the world. Become that change with Sadhu boards from Euphoria System. I wish I could try it, but looks good. I believe Rajesh, though...'
  }, {
    img: RevievSadhguru,
    title: 'Sadhguru',
    subtitle: 'Mystic / Yogi / Influencer',
    insta: '@sadhguru.isha',
    content: 'Unfold your genius with Euphoria System sadhu. Unless you constantly strive to be better, you will become a stagnant pool. Stagnation will ultimately poison your life. '
  }];

  return (
    <>
      <Container>
        <Row>
          <Col xs="12">
            <SectionHeader subtitle="Reviews" title="What People Say" />
          </Col>
        </Row>

        <Row className="mb-5">
          {reviews.map((review, index) => (
            <Col key={index} xs="12">
              <Review>
                <ReviewImg url={review.img} />

                <ReviewContainer>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <ReviewSubtitle>{review.subtitle}</ReviewSubtitle>
                  <ReviewInsta>{review.insta}</ReviewInsta>
                  <ReviewContent>{review.content}</ReviewContent>
                </ReviewContainer>
              </Review>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
