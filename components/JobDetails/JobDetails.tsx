import React from "react";
import JobHeader from "./JobHeader/JobHeader";
import JobInfo from "./JobInfo/JobInfo";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import {
  FacebookShareButton
  // LinkedinShareButton,
  // TelegramShareButton,
  // TwitterShareButton,
  // WhatsappShareButton,
} from "react-share";

const JobDetail = () => {
  const someHTML = `
    <p>You will work directly with the founder of a young company called Polymer Search and work on some exciting
     search innovation. I have been a Computer science engineer myself for the last 20+ years (ex-Google).
      I am looking for an experienced full stack developer. The focus is on data analytics and
       management via a SaaS webapp via a fairly involved UX. Some of the skills I am looking for are:</p>

      <ul>
        <li>5+ years experience in performant Javascript for frontend and backend.</li>

        <li>2+ year Vue.js experience (or another Reactive framework like React and willing to pickup Vue quickly)</li>

        <li>Preferable: <a href="#">Node.js</a> experience: Writing performant web applications, working with popular frameworks.</li>

        <li>Comfortable with HTML/CSS and CSS frameworks like Bootstrap</li>

        <li>Comfortable using Chrome or Firefox Dev Tools to debug and instrument web applications</li>

        <li>Working with databases : Postgres/Redis/Mongodb</li>

        <li>Working with different web architectures and technologies (Load balancing, performance instrumentation, logging, queuing technologies, databases)</li>
      </ul>
  `;

  return (
    <div>
      <JobHeader />
      <JobInfo />

      <div className="container">
        <h2>Company description</h2>
        <p>
          Our mission is to make complex and spreadsheet-like information instantly obvious and usable, thus empowering
          users to take the best course of action for any situation.
        </p>

        <h2>Job descripition</h2>
        <p dangerouslySetInnerHTML={{ __html: someHTML }} />

        <h2>Skills</h2>
        <span>#aws</span>
        <span>#node</span>
        <span>#node</span>

        <div className="jumbotron">
          <h3 className="display-5">Hello, world!</h3>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <button className="btn btn-success">Apply now!</button>
        </div>

        <div>
          <p>Do you think this job matches someone? Share!</p>
          <FacebookShareButton url={`http://google.com`}>
            Facebook <FacebookIcon />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
