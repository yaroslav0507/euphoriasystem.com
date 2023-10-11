import { Header } from "./Header/Header";
import { AboutSection } from "./sections/AboutSection";
import { HomeSection } from "./sections/HomeSection";
import { MaterialsSection } from "./sections/MaterialsSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { ContactsSection } from "./sections/ContactsSection";
import styled from "styled-components";
import { device } from "./shared/breakpoints";

const LayoutWrapper = styled.div`
  overflow: hidden;

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;

    ${device.xs} {
      font-size: 34px;
    }
  }
  
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;

    ${device.xs} {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 16px;
    font-weight: 400;
    white-space: pre-line;

    ${device.xs} {
      font-size: 18px;
    }
  }
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <HomeSection />

      <AboutSection />

      <MaterialsSection />

      <ReviewsSection />

      <ContactsSection />
    </LayoutWrapper>
  );
};
