import Link from "next/link";
import React from "react";
// import style from "./JobCard.module.scss";

const JobCard = () => {
  return (
    <div className="job-card featured">
      <span className="badge">New!</span>
      <div className="logo">
        <img
          src="https://vuejobs.com/storage/avatars/zPn88Mlb86tBR9NZIhRMlGY4b3fauhKnZZi6uFNY.png"
          alt="Logo of Sherpa Digital Media"
        />
      </div>
      <div className="content">
        <span className="content__type">Full-time</span>
        <h3>
          <Link href={`/jobs/${1}`}>
            <a className="content__link">Senior Front-end Engineer</a>
          </Link>
        </h3>
        <div className="content__meta">
          <span>at</span>
          <strong>Sherpa Digital Media</strong>
          <p>– San Mateo, CA, USA, Remote</p>
        </div>
        <p className="job-card__content-description">
          Our Goal Looking for an experienced Vue.js developer to immediately contribute to our existing product and
          help us build and design both new features as well as entirely new produ...
        </p>
      </div>
    </div>
  );
};
export default JobCard;
