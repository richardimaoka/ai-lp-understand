import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ServiceFeaturesSection from "./components/ServiceFeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import PricingSection from "./components/PricingSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ServiceFeaturesSection />
      <TestimonialsSection />
      <KeyFeaturesSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
