import React from "react";

function FeedbackStats({ FeedbackData }) {
  let average =
    FeedbackData.reduce((prev, cur) => {
      return prev + cur.rating;
    }, 0) / FeedbackData.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{FeedbackData.length} reviews</h4>
      <h4>{average} ratings</h4>
    </div>
  );
}

export default FeedbackStats;
