import styled from "styled-components";
import { Header } from "./Header/Header";
import { AboutSection } from "./sections/AboutSection";
import { HomeSection } from "./sections/HomeSection";
import { MaterialsSection } from "./sections/MaterialsSection";
import { ReviewsSection } from "./sections/ReviewsSection";

const LayoutWrapper = styled.div`
  padding-top: 12px;
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <HomeSection />

      <AboutSection />

      <MaterialsSection />

      <ReviewsSection />
    </LayoutWrapper>
  );
};
