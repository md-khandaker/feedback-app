import React, { useContext } from "react";
import Card from "./shared/Card";
import { IoIosCloseCircle } from "react-icons/io";
import FeedbackContext from "../context/FeedbackContex";

function FeedbackItem({ item}) {
  const{deleteFeedback}= useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button>
        <IoIosCloseCircle onClick={() => deleteFeedback(item.id)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
