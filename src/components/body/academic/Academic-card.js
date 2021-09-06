import React from "react";
import "./Academic-card.css";
function AcademicCard({ item }) {
  return (
    <div className="academic-card">
      <div className="academic-info">
        <label className="institute-name">{item.instituteName}</label>
        <label className="qualification-name">{item.qualification}</label>
        <label className="department-name">{item.department}</label>
        <div className="passedOut-dates">
          <label>{item.yearOfPassing}</label>
        </div>
      </div>
    </div>
  );
}

export default AcademicCard;
