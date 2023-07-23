import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { School } from "@mui/icons-material";
export default function Experience() {
  return (
    <div className="exp">
      <div className="expclass">
        <div className="exphead">
          <h1>Experience</h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e89105", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="10 May 2023 - present"
            iconStyle={{ background: "#e89105", color: "white" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer intern at ACE
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Nit Raipur</h4>
            <p>Developed a official CSE website for my college.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="expclass">
        <div className="exphead">
          <h1>Education</h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e89105", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - present"
            iconStyle={{ background: "#e89105", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Tech in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Institute of Technology,Raipur
            </h4>
            <p>
              Doing my B.tech Program in Coumputer Science branch.
              <br />
              CPI - 8.68
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e89105", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018-2020"
            iconStyle={{ background: "#e89105", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">12th Class</h3>
            <h4 className="vertical-timeline-element-subtitle">
              St. Jospehs International School,Jhalawar,Rajasthan
            </h4>
            <p>Grade - 88.8%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
