import React from "react";
import "./resumeItem.css";
// import "/animate.css/animate.css";

export default function ResumeItem({
  item,
}: {
  item: {
    title: string;
    period: string;
    brief: string;
    details: [string];
  };
}) {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      {/* Check whether the "eriod has value or not, if not then show nothing" */}
      {item.period && <h5>{item.period}</h5>}
      <p>
        <em>{item.brief}</em>
      </p>
      <ul>
        {item.details &&
          item.details.length > 0 &&
          item.details.map((line, index) => <li key={index}>{line}</li>)}
      </ul>
    </div>
  );
}
