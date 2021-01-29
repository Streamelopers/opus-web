import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all-jobs");
  const [tabs] = useState({
    "all-jobs": "All Jobs",
    "full-time": "Full-time",
    "part-time": "Part-time",
    freelance: "Freelance",
    temporary: "Temporary",
    intership: "Intership",
    remote: "Remote"
  });

  return (
    <>
      <div className="home-container container">
        <div className="hero">
          <Hero />
        </div>
        <ul className="nav nav-tabs">
          {Object.entries(tabs).map(([key, value]) => (
            <li className="nav-item" key={key}>
              <span onClick={() => setActiveTab(key)} className={`nav-link ${activeTab === key ? "active" : ""}`}>
                {value}
              </span>
            </li>
          ))}
        </ul>
        <div className="jobs">
          <Jobs />
        </div>
      </div>
    </>
  );
};
export default Home;
