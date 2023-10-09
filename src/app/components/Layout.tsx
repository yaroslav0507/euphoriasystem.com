import { Header } from "./Header/Header";
import { AboutSection } from "./sections/AboutSection";
import { HomeSection } from "./sections/HomeSection";
import { MaterialsSection } from "./sections/MaterialsSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { ContactsSection } from "./sections/ContactsSection";

export const Layout = () => {
  return (
    <>
      <Header />

      <HomeSection />

      <AboutSection />

      <MaterialsSection />

      <ReviewsSection />

      <ContactsSection />
    </>
  );
};
