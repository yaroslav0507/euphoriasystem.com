import { Header } from "./Header/Header";
import { HomeSection } from "./sections/Home/HomeSection";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  padding-top: 12px;
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <HomeSection />
    </LayoutWrapper>
  );
};
