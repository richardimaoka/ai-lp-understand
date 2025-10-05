"use client";
import React, { FC } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

import "./globals.css";

// --- メインコンポーネント ---
const App: FC = () => {
  return (
    <div className="body">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
