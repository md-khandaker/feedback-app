import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContex";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  //   console.log(feedback);
  if (!feedback || feedback.lenght === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
