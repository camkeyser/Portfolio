import React from 'react';
import './Experience.scss';
import rrpartners from '../../assets/webp/rr.webp';
import oozle from '../../assets/webp/oozle.webp';
import nfinite from '../../assets/webp/nfinite.webp';
import bp from '../../assets/webp/bp.webp';
import boost from '../../assets/webp/boost.webp';

export default function Experience() {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={rrpartners} alt="Oozle Media" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Digital Developer</p>
          <p className="experience-company">R&R Partners</p>
          <p className="experience-dates">Jun 2022 - Oct 2024 • Las Vegas, NV</p>
          <p className="experience-description">
            • Full Stack Developer responsible for managing and maintaining many client websites.<br />
            • Contributed to high-profile projects for well-known clients, including Paramount, Boeing, Nickelodeon, Parents Empowered, and various Las Vegas-based companies.<br />
            • Collaborated with teams from different areas to design and implement solutions that aligned with client needs
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={oozle} alt="Oozle Media" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer</p>
          <p className="experience-company">Oozle Media</p>
          <p className="experience-dates">Sep 2020 - Jun 2022 • South Jordan, UT</p>
          <p className="experience-description">
            • Lead Developer responsible for managing and maintaining 50+ client websites.<br />
            • Handled routine updates, maintenance, and technical fixes to ensure optimal site performance.<br />
            • Streamlined workflows to improve the efficiency of site updates and deployments.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={nfinite} alt="Oozle Media" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Owner / Developer / Designer</p>
          <p className="experience-company">Nfinite Sites</p>
          <p className="experience-dates">Feb 2019 - Jan 2021 • Draper, Utah</p>
          <p className="experience-description">
            • Design, develop, and maintain several small business websites.<br />
            • Implement SEO and marketing campaigns.
          </p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-icon">
          <img src={bp} alt="Oozle Media" />
        </div>
        <div className="experience-content">
          <p className="experience-title">Full Stack Developer / Technical Support</p>
          <p className="experience-company">Business Promotion</p>
          <p className="experience-dates">Oct 2016 - Feb 2019 • American Fork, UT</p>
          <p className="experience-description">
            • Built and maintained custom websites for a large number of clients (100+).<br />
            • Assisted in building custom dashboards for various departments in the company (e.g., Retention, Sales, Team Stat Dashboards).<br />
            • Collaborated directly with business owners when making changes or building new sites.
          </p>
        </div>
      </div>
    </section>
  );
}