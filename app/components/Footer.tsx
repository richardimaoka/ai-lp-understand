"use client";
import React, { FC } from "react";

const Footer: FC = () => (
  <footer className="lp-footer">
    <div className="lp-content-wrapper lp-text-center lp-text-gray-400">
      <p className="lp-footer-brand">ProductPro | 究極の生産性向上ツール</p>
      <div className="lp-footer-links">
        <a href="#" className="lp-footer-link">
          プライバシーポリシー
        </a>
        <a href="#" className="lp-footer-link">
          利用規約
        </a>
        <a href="#" className="lp-footer-link">
          サポート
        </a>
      </div>
      <p className="lp-footer-copy">
        &copy; {new Date().getFullYear()} ProductPro. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
