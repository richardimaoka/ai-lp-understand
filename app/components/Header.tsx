"use client";
import React, { FC } from "react";

const Header: FC = () => (
  <header className="lp-header">
    <div className="lp-header-content-wrapper">
      <h1 className="lp-logo">
        Product<span className="lp-logo-suffix">Pro</span>
      </h1>
      <a href="#cta" className="lp-header-cta">
        今すぐ無料トライアル
      </a>
    </div>
  </header>
);

export default Header;
